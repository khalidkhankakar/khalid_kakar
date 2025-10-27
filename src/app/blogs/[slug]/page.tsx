
import { ArrowLeft, } from "lucide-react";
import BlogInSegments from "./_components/blog-details";
import Image from "next/image";
import { Suspense } from "react";
import Link from "next/link";

interface PageProps {
    params: Promise<{ slug: string }>
}

const Page = async ({ params }: PageProps) => {
   
    return (
        <div className='min-h-screen overflow-y-auto max-w-[85%] lg:max-w-5xl mx-auto px-4 py-20 text-white'>
            <div className='flex items-center flex-col gap-y-3' >
                {/* show the image */}

                <Suspense fallback={<div>Loading image...</div>}>

                <BlogInSegments slugPromise={params.then((p)=>p.slug)} ShowImageOnly={true} />
                </Suspense>
            
                <div className='flex items-center justify-center gap-y-3 flex-col'>
                    <Link
                        className='group my-3 flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition sm:mb-8 sm:text-base'
                        href={'/blogs'}
                    >
                        <ArrowLeft /> <span>All Articles</span>
                    </Link>

                    {/* show the showTitleAndTagsAndTime */}
                    <Suspense fallback={<div>Loading showTitleAndTagsAndTime ...</div>}>

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
                <Suspense fallback={<div>loading Artical...</div>}>

                <BlogInSegments slugPromise={params.then((p)=>p.slug)} />
                </Suspense>
            </div>
        </div>
    )
}

export default Page
