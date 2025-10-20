import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { blogSchema } from "../schema";
import { TRPCError } from "@trpc/server";
import { put } from "@vercel/blob";


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
            const existingBlogSlug = await ctx.db.query.blogs.findFirst({ where: { slug: blogSlug } })
            if (existingBlogSlug) {
              throw new TRPCError({ code: "BAD_REQUEST", message: "Blog with same title already exists" });
            }
            
            // create the tags
            let tagIds: string[] = [];
            for (const tag of tags) {

              let existingTag = await ctx.db.select().from(tags).where({ name: tag }).limit(1)
            }
            
              



        } catch (error) {
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: (error as Error).message });
        }
    })

})


