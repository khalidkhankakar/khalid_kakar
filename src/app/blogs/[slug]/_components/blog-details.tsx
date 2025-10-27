import Image from 'next/image'
import { calculateReadingTime, formatDate } from '@/lib/utils'
import { caller } from '@/trpc/server'
import { cache } from 'react'

interface Props {
    ShowImageOnly?: boolean
    showTitleAndTagsAndTime?: boolean
    slugPromise:Promise<string>
}

const BlogInSegments =  async({slugPromise, ShowImageOnly =false, showTitleAndTagsAndTime=false }: Props) => {
    const slug = await slugPromise
    const {content, image, createdAt, tags, title} = await getBlogBySlug(slug)

    if (ShowImageOnly) {
        return (
            <div className="w-full">
                {/* dynamic content */}
                <Image src={image || '/images/5.jpg'} width={1000} height={700} alt={title} className='w-full object-contain p-4 h-44' />
            </div>
        )
    }


    if (showTitleAndTagsAndTime) {
        return (
            <div>
                <h1 className='block text-center text-gray-900 dark:text-white text-4xl font-bold sm:text-4xl md:text-5xl'>
                    {title}
                </h1>
                <div className='w-full md:w-2/3 my-4 space-y-3 mx-auto'>
                    <div className='flex items-center justify-center gap-3 flex-wrap'>
                        {tags.map((tag) => (
                            <div
                                key={tag}
                                className="px-2 py-1 rounded text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>

                    <div className='flex items-center justify-center gap-3'>
                        <div className='flex my-3 items-center gap-2'>
                            <span className='text-[10px] md:text-xs text-gray-500 dark:text-gray-400'>Published on</span>
                            <span className='text-[10px] md:text-xs font-semibold text-gray-700 dark:text-gray-300'>{formatDate(createdAt)}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-[10px] md:text-xs text-gray-500 dark:text-gray-400'>Read time</span>
                            <span className='text-[10px] md:text-xs font-semibold text-gray-700 dark:text-gray-300'>{calculateReadingTime(content)}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }




    return (
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert mx-auto ">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
    )
}

export default BlogInSegments


const getBlogBySlug = cache(async (slug:string)=>{
    const blog = await caller.blog.getBlogBySlug({slug})
    return blog.blog
})
