import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { blogSchema } from "../schema";
import { TRPCError } from "@trpc/server";
import { put } from "@vercel/blob";
import {tags as tagsTable, blogs as blogsTable, tagBlogs as tagBlogsTable} from "@/drizzle/models/index";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import z from "zod";
import slugify from "slugify";

export const blogRouter = createTRPCRouter({
    createBlog: baseProcedure.input(blogSchema).mutation(async ({ ctx, input }) => {
        try {
            const { content, description, tags, title, image } = input;
            
            console.log({image})
            let imageUrl = ''

            if (image as File) {
                const { url } = await put(image?.name, image, { access: 'public' });
                imageUrl = url
            }

            const blogSlug = slugify(title, { lower: true })

            const existingBlogSlug = await ctx.db.query.blogs.findFirst({ where: (blog, { eq }) => eq(blog.slug, blogSlug) })


            if (existingBlogSlug) {
              throw new TRPCError({ code: "BAD_REQUEST", message: "Blog with same title already exists" });
            }
            
            // create the tags
            const tagId = []

            for (const tagName of tags) {

            const existingTag = await ctx.db.query.tags.findFirst({ where: (tag, { eq }) => eq(tag.name, tagName) })

            if (!existingTag) {
                const [newTag] = await ctx.db.insert(tagsTable).values({ name: tagName }).returning()
                tagId.push(newTag.id)
    }

            else{
                // increment the blog count 
                 await ctx.db.update(tagsTable).set({ blogs: (existingTag.blogs || 0) + 1 }).where(eq(tagsTable.name, tagName))
                 tagId.push(existingTag.id)
            }
        }

        // create the blog
            const [newBlog] = await ctx.db.insert(blogsTable).values({
               content,
               description,
                title,
                slug: blogSlug,
                image: imageUrl,
            }).returning();
           
            if (!newBlog) {
                throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to create blog" });
            }

            console.log({newBlogId: newBlog.id, tagId})
            // link tags to blog
            for (const id of tagId) {
                await ctx.db.insert(tagBlogsTable).values({
                    blogId: newBlog.id,
                    tagId: id,
                })
            }

            revalidatePath('/blogs')

            return {
                code: 201,
                message: "Blog created successfully",
            }

        } catch (error) {
            throw new TRPCError({  code: "INTERNAL_SERVER_ERROR", message: (error as Error).message });
        }
    }),
    getBlogBySlug: baseProcedure.input(z.object({
        slug: z.string(),
      })).query(async ({ ctx, input }) => {
        try {
            const { slug } = input;
            const blog = await ctx.db.query.blogs.findFirst({ where: (blog, { eq }) => eq(blog.slug, slug)})

              if (!blog) {
                throw new TRPCError({ code: "NOT_FOUND", message: "Blog not found" });
            }

            // populate tags
            const blogWithTags =  {
                ...blog,
                tags: await ctx.db.query.tagBlogs.findMany({
                    where: (tagBlog, { eq }) => eq(tagBlog.blogId, blog.id),
                    with: {
                        tag: true,
                    },
                }).then(tagBlogs => tagBlogs.map(tb => tb.tag.name))
            }

            return {code: 200, blog:blogWithTags  };
        } catch (error) {
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: (error as Error).message });
        }
    }),
    getAllBlogs: baseProcedure.query(async ({ ctx }) => {
        try {
            const blogs = await ctx.db.query.blogs.findMany({
                orderBy: (blog, { desc }) => [desc(blog.createdAt)]
            }); 
            return {code:200, blogs};
        } catch (error) {
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: (error as Error).message });
        }
    }),
    deleteBlogById: baseProcedure.input(z.object({
        id: z.string(),
      })).mutation(async ({ ctx, input }) => {
        try {
            const { id } = input;
            const [deletedBlog] = await ctx.db.delete(blogsTable).where(eq(blogsTable.id, id)).returning();
            if (!deletedBlog) {
                throw new TRPCError({ code: "NOT_FOUND", message: "Blog not found" });
            }
            revalidatePath('/blogs')
            return {code: 200, message: "Blog deleted successfully" };
        } catch (error) {
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: (error as Error).message });
        }
    }),

    editBlogById: baseProcedure.input(z.object({
        id: z.string(),
        title: z.string().optional(),
        description: z.string().optional(),
        content: z.string().optional(),
        image: z.instanceof(File).optional(),
        tags: z.array(z.string()).optional(),
        })).mutation(async ({ ctx, input }) => {
        try {
            const { id, title, description,tags, content, image } = input;
            let imageUrl = ''
            if (image) {
                const { url } = await put(image?.name, image, { access: 'public' });
                imageUrl = url
            }
            const updatedFields: any = {};
            if (title) updatedFields.title = title;
            if (description) updatedFields.description = description;
            if (content) updatedFields.content = content;
            if (imageUrl) updatedFields.image = imageUrl;

            if(tags && tags.length > 0){
                // first get the existing tags for the blog
                const existingTagBlogs = await ctx.db.query.tagBlogs.findMany({ where: (tb, { eq }) => eq(tb.blogId, id) })
                const existingTagIds = existingTagBlogs.map(etb => etb.tagId)
                // decrement the blog count for existing tags
                for(const tagId of existingTagIds){
                    const tag = await ctx.db.query.tags.findFirst({ where: (tag, { eq }) => eq(tag.id, tagId) })
                    if(tag){
                        await ctx.db.update(tagsTable).set({ blogs: Math.max((tag.blogs || 1) - 1, 0) }).where(eq(tagsTable.id, tagId))
                    }
                }

                // delete existing tagBlogs
                await ctx.db.delete(tagBlogsTable).where(eq(tagBlogsTable.blogId, id))
                // create or update new tags
                const tagIdList = []
                for (const tagName of tags) {

                    const existingTag = await ctx.db.query.tags.findFirst({ where: (tag, { eq }) => eq(tag.name, tagName) })
                    if (!existingTag) {
                        const [newTag] = await ctx.db.insert(tagsTable).values({ name: tagName }).returning()
                        tagIdList.push(newTag.id)

                    }
                    else{
                        // increment the blog count
                        await ctx.db.update(tagsTable).set({ blogs: (existingTag.blogs || 0) + 1 }).where(eq(tagsTable.name, tagName))
                        tagIdList.push(existingTag.id)
                    }
                }
                // link new tags to blog
                for (const tagId of tagIdList) {
                    await ctx.db.insert(tagBlogsTable).values({
                        blogId: id,
                        tagId: tagId,
                    })
                }

            }

            const [updatedBlog] = await ctx.db.update(blogsTable).set(updatedFields).where(eq(blogsTable.id, id)).returning();
            if (!updatedBlog) {
                throw new TRPCError({ code: "NOT_FOUND", message: "Blog not found" });
            }
            revalidatePath('/blogs')
            return {code: 200, message: "Blog updated successfully" };
        } catch (error) {
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: (error as Error).message });
        }
    }),



})


