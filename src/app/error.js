"use client"
import Link from 'next/link'

export default function Error() {
  return (
    <div className='text-rose-500 mx-auto text-3xl text-center mt-10'>We encountered an error. Back to safety <Link href="/" className='underline hover:text-green-500'>here.</Link></div>
  )
}
