import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <div className='mt-10 text-center'>
        <h2>Page not found.</h2>
        <p>Try going back to safety <Link href="/" className='underline hover:text-green-500'>here.</Link>!</p>
    </div>
  )
}
