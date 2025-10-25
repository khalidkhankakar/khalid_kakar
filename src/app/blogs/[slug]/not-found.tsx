import { buttonVariants } from '@/components/ui/button'
import { Link } from 'lucide-react'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen flex items-center justify-center '>
    <div className='space-y-2'>

      <h2 className='text-xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className={buttonVariants({variant:'default'})}>Return Home</Link>
    </div>
    </div>
  )
}

export default NotFound
