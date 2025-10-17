interface Props {
    params: {
        slug: string
    }
}

 
// export async function generateMetadata(
//     { params }: Props,
//     parent: ResolvingMetadata
//   ): Promise<Metadata> {
//     const {slug} = params
   
//     const blog = await getBlog(slug).then((blog) => blog);
    
//     return {
//       title: blog.title,
//       openGraph: {
//         title: blog.title,
//         description: blog.description,
//       },
//     }
//   }
   
const page = async ({ params }: Props) => {
    const { slug } = params;
    // TODO: fetch the blog details
    return (
        <div className='min-h-screen overflow-y-auto max-w-[85%] lg:max-w-5xl mx-auto px-4  py-20 text-white'>
         show the blog details
        </div>
    )
}

export default page
