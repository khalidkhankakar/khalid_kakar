import Image from 'next/image'
import { calculateReadingTime, formatDate } from '@/lib/utils'
import { caller } from '@/trpc/server'
import { cache } from 'react'
import TagCard from '@/components/shared/tag-card'

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
            <div className='font-poppins'>
                <h1 className='block text-center text-gray-900 dark:text-white text-2xl font-bold sm:text-4xl md:text-5xl'>
                    {title}
                </h1>
                <div className='w-full md:w-2/3 my-4 space-y-3 mx-auto'>
                    <div className='flex items-center justify-center gap-3 flex-wrap'>
                        {tags.map((tag) => (
                            <TagCard key={tag} id={tag} name={tag} />
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
        <div className="w-full">
            <article className="prose font-poppins prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert mx-auto">
                <div className="max-w-full overflow-x-hidden prose-pre:overflow-x-auto prose-pre:max-w-full prose-img:max-w-full" 
                    dangerouslySetInnerHTML={{ __html: content }} 
                />
            </article>
        </div>
    )
}

export default BlogInSegments


export const getBlogBySlug = cache(async (slug:string)=>{
    const blog = await caller.blog.getBlogBySlug({slug})
    return blog.blog
})
