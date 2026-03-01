import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between m-4'>

    <div>
      <h1>Navaber</h1>
    </div>

    <div className='flex gap-2'>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </div>

    </div>
  )
}

export default Navbar