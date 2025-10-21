import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { blogSchema } from "../schema";
import { TRPCError } from "@trpc/server";
import { put } from "@vercel/blob";
import {tags as tagsTable, blogs as blogsTable, tagBlogs as tagBlogsTable} from "@/drizzle/models/index";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import z from "zod";
import { get } from "http";


export const blogRouter = createTRPCRouter({
    createBlog: baseProcedure.input(blogSchema).mutation(async ({ ctx, input }) => {
        try {
            const { content, description, tags, title, image } = input;

            let imageUrl = ''
            if (image) {
                const { url } = await put(image?.name, image, { access: 'public' });
                imageUrl = url
            }

            const blogSlug = slugify(title, { lower: true })

            const existingBlogSlug = await ctx.db.query.blogs.findFirst({ where: (blog, { eq }) => eq(blog.slug, blogSlug) })


            if (existingBlogSlug) {
              throw new TRPCError({ code: "BAD_REQUEST", message: "Blog with same title already exists" });
            }
            
            // create the tags
            let tagId = []

            for (const tagName of tags) {

            let existingTag = await ctx.db.query.tags.findFirst({ where: (tag, { eq }) => eq(tag.name, tagName) })

            if (!existingTag) {
                existingTag = await ctx.db.insert(tagsTable).values({ name: tagName })
                }

            else{
                // increment the blog count 
                existingTag = await ctx.db.update(tagsTable).set({ blogs: (existingTag.blogs || 0) + 1 }).where(eq(tagsTable.name, tagName))
            }

            tagId.push(existingTag.id)
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


})


