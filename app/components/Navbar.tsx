import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  const session=false;
  return (
    <div className='flex gap-4 p-4 bg-gray-200'>
        <Link href="/" className='text-xl font-bold text-yellow-950'>Contact Manager</Link>
        <div className='flex items-center gap-4 ml-auto'>
          {session ? ( 
            <Link href="/" className='text-l font-bold hover:text-blue-500'>Contact</Link>
          ) : (<div><Link href="/Login">Register</Link></div> )}
        </div>
    </div>
  )
}

export default Navbar;
