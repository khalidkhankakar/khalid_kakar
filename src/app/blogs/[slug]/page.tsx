
import { ArrowLeft, } from "lucide-react";
import BlogInSegments, { getBlogBySlug } from "./_components/blog-details";
import Image from "next/image";
import { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>
}


export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);
    
    return {
        title: `Khalid | ${blog.title}`,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
        },
    }
}

const Page = async ({ params }: PageProps) => {
    'use cache';
   
    return (
        <div className='min-h-screen font-poppins overflow-y-auto max-w-[85%] lg:max-w-5xl mx-auto px-4 py-20 text-white'>
            <div className='flex items-center flex-col gap-y-3' >
                {/* show the image */}

                <Suspense fallback={
                    <div className="w-full animate-pulse">
                        <div className="w-full h-44 bg-gray-300 dark:bg-gray-800 rounded-lg" />
                    </div>
                }>
                    <BlogInSegments slugPromise={params.then((p)=>p.slug)} ShowImageOnly={true} />
                </Suspense>
            
                <div className='flex items-center justify-center gap-y-3 flex-col w-full '>
                    <Link
                        className='group my-3 flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition sm:mb-8 sm:text-base'
                        href={'/blogs'}
                    >
                        <ArrowLeft /> <span>All Articles</span>
                    </Link>

                    {/* show the showTitleAndTagsAndTime */}
                    <Suspense fallback={
                        <div className="w-full animate-pulse space-y-4">
                            {/* Title skeleton */}
                            <div className="h-12 bg-gray-300 dark:bg-gray-800 rounded-lg w-3/4 mx-auto" />
                            
                            {/* Tags skeleton */}
                            <div className="flex justify-center gap-2 flex-wrap">
                                {[1,2,3].map((i) => (
                                    <div key={i} className="h-6 w-16 bg-gray-300 dark:bg-gray-800 rounded" />
                                ))}
                            </div>
                            
                            {/* Date and read time skeleton */}
                            <div className="flex items-center justify-center gap-4">
                                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-800 rounded" />
                                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-800 rounded" />
                            </div>
                        </div>
                    }>
                        <BlogInSegments slugPromise={params.then((p)=>p.slug)} showTitleAndTagsAndTime={true} />
                    </Suspense>

                    <div className="flex items-center gap-3 mx-auto justify-center my-2 md:my-3">
                        <Image src={'/profile.jfif'} width={100} height={100} alt="Author" className='rounded-full w-16 h-16' />
                        <div className='w-full md:w-1/2'>
                            <p className='text-lg font-bold text-gray-900 dark:text-white'>Khalid Kakar</p>
                            <p className='text-xs md:text-sm text-gray-600 dark:text-gray-400'>
                                Khalid simplifies complex modern web development topics into simple words with expertise in Next.js and React.js
                            </p>
                        </div>
                    </div>
                </div>

                {/* Show the Article Content */}
                <Suspense fallback={
                    <div className="w-full animate-pulse space-y-4 max-w-3xl mx-auto">
                        {/* Paragraphs */}
                        {[1,2,3,4].map((i) => (
                            <div key={i} className="space-y-3">
                                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-full" />
                                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-[90%]" />
                                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-[95%]" />
                            </div>
                        ))}
                        
                        {/* Code block skeleton */}
                        <div className="h-32 bg-gray-300 dark:bg-gray-800 rounded-lg mt-6" />
                        
                        {/* List skeleton */}
                        <div className="space-y-2 mt-6">
                            {[1,2,3].map((i) => (
                                <div key={i} className="flex gap-2">
                                    <div className="h-4 w-4 bg-gray-300 dark:bg-gray-800 rounded-full mt-1" />
                                    <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-[80%]" />
                                </div>
                            ))}
                        </div>
                    </div>
                }>
                    <BlogInSegments slugPromise={params.then((p)=>p.slug)} />
                </Suspense>
            </div>
        </div>
    )
}

export default Page


