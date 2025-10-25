import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { calculateReadingTime, formatDate } from '@/lib/utils'

interface Props {
    id: string
    title: string
    content: string
    tags: string[]
    image: string
    createdAt: Date
}

const BlogDetails = ({ title, content, tags, image, createdAt }: Props) => {
    return (
        <div className='flex items-center flex-col gap-y-3' >
            <div className="w-full">
                <Image src={image ||'/images/5.jpg'} width={1000} height={700} alt={title} className='w-full object-contain p-4 h-44' />
            </div>
            <div className='flex items-center justify-center gap-y-3 flex-col'>
                <Link className='group my-3 flex items-center text-purple-1 hover:text-purple-2 gap-1 text-sm text-primary opacity-75 transition hover:opacity-100 sm:mb-8 sm:text-base' href={'/blogs'}><ArrowLeft /> <span>All Articals</span></Link>
                <h1 className='block tracking-wider text-balance text-center font-lobster text-4xl font-bold sm:text-4xl md:text-5xl'>
                    {title}
                </h1>
                <div className='w-full md:w-2/3 my-4 space-y-3 mx-auto'>
                    <div className='flex items-center justify-center gap-3 flex-wrap '>
                        {tags.map((tag) => (
                            <div key={tag} className="px-2 py-1 bg-dark-1 rounded text-sm">{tag}</div>
                        ))}
                    </div>
                    <div className=' flex items-center justify-center gap-3 '>
                        <div className='flex my-3 items-center gap-2'>
                            <span className='text-[10px] md:text-xs opacity-50'>Published on</span>
                            <span className='text-[10px] md:text-xs font-semibold  '>{formatDate(createdAt)}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-[10px] md:text-xs opacity-50'>Read time</span>
                            <span className='text-[10px] md:text-xs font-semibold'>{calculateReadingTime(content)}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 mx-auto justify-center my-2 md:my-3">
                    <Image src={'/profile.jfif'} width={100} height={100} alt="css" className='rounded-full w-16 h-16' />
                    <div className='w-full md:w-1/2 '>
                        <p className='text-lg font-bold'>Khalid Kakar</p>
                        <p className='text-xs md:text-sm  opacity-50'>Khalid simplifies complex modern web development topics into simple words with expertise in Next.js and React.js</p>
                    </div>
                </div>


            </div>

            <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert mx-auto ">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>

        </div>
    )
}

export default BlogDetails
