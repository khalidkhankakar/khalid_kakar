"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { blogSchema } from "@/modules/blog/schema"
import ImageUploader from "./image-uploader"
import Editor from "@/components/editor"
import { useMutation } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"
import TagCard from "@/components/shared/tag-card"
import { toast } from "sonner"
import { useRouter } from "next/navigation"


interface Props{
  blogId?: string
  blogTitle?: string
  blogContent?: string
  blogTags?: string[]
  blogImage?: string
  blogDesc?:string
  isEdit?:boolean
}

const BlogForm = ({
  blogTitle,
  blogContent,
  blogTags,
  blogImage, 
  blogDesc,}:Props) => {
  const trpc = useTRPC()
  const router = useRouter()
  const {mutate, isPending} = useMutation(trpc.blog.createBlog.mutationOptions({
    onSuccess:(message)=>{
      console.log('Blog created successfully',{message})
      toast.success('Blog created successfully')
      router.push('/blogs')
    },
    onError:(message)=>{
      console.log('Oops!', {message})
      toast.error('Failed to create blog')
    }
  }))
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      image: undefined,
      title: blogTitle || "",
      description: blogDesc || "",
      // todo: fix this type 
      tags: blogTags || [],
      content: blogContent || "",
    },
  })

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, field: { value: string[] }) {
    if (e.key === 'Enter') {

      e.preventDefault();
      const inputTag = e.currentTarget.value.trim();
      if (inputTag && inputTag.length < 15 && !field.value.includes(inputTag)) {
        form.setValue('tags', [...field.value, inputTag]);
        e.currentTarget.value = '';
        form.clearErrors('tags');
      }
      else if (inputTag.length > 15) {
        form.setError('tags', {
          type: 'manual',
          message: 'Tag cannot exceed 15 characters.'
        });
      }
      else if (field.value.includes(inputTag)) {
        form.setError("tags", {
          type: "manual",
          message: "Tag already exists",
        });
      }

    }
  }
  const handleTagRemove = (tag: string, field: { value: string[] }) => {
    const newTags = field.value.filter((t) => t !== tag);

    form.setValue("tags", newTags);

    if (newTags.length === 0) {
      form.setError("tags", {
        type: "manual",
        message: "Tags are required",
      });
    }
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof blogSchema>) {
    const formData = new FormData();
    formData.append('image', values.image as File);
    formData.append('title', values.title);
    formData.append('tags', JSON.stringify(values.tags));
    formData.append('content', values.content);
    formData.append('description', values.description);
    console.log({values})
    // TODO: UPLOAD THE FROMDATA IN REQUEST
    mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add your blog cover image</FormLabel>
              <FormControl>
                <ImageUploader url={blogImage} fileOnChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Blog title here...</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Runtime of the Javascript"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add up to 5 tags</FormLabel>
              <FormControl>
                <div>
                  <Input placeholder="javascript" onKeyDown={(e) => handleKeyDown(e, field)}
                  />
                  {
                    <div className="flex my-2 w-full flex-wrap gap-2 mt-2">
                      {
                        field.value.length > 0 &&
                        field.value.map((tag, index) => (
                          <TagCard remove key={index} id={tag} name={tag} onRemove={() => handleTagRemove(tag, field)} />
                        ))
                      }
                    </div>
                  }
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brife blog description...</FormLabel>
              <FormControl>
                <Textarea placeholder="This is a blog about javascript" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Write your blog content here...</FormLabel>
              <FormControl>
                <Editor initialValue={field.value as any} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" > {isPending ? 'Posting...' : 'Post Your Blog'}</Button>
      </form>
    </Form>
  )
}

export default BlogForm