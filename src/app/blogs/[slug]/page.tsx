import { caller, trpc } from "@/trpc/server";
import { Metadata } from "next";
import BlogDetails from "./_components/blog-details";

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params;
    const { blog } = await caller.blog.getBlogBySlug({slug});
    
    return {
        title: `Khalid | ${blog.title}`,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
        },
    }
}

const Page = async ({ params }: Props) => {
    const { slug } = await params;
    const { blog } = await caller.blog.getBlogBySlug({slug});
    console.log({blog, slug})
    return (
        <div className='min-h-screen overflow-y-auto max-w-[85%] lg:max-w-5xl mx-auto px-4 py-20 text-white'>
            <BlogDetails
                id={blog.id}
                title={blog.title}
                content={blog.content}
                image={blog.image}
                tags={blog.tags}
                createdAt={blog.createdAt}
            />
        </div>
    )
}

export default Page
