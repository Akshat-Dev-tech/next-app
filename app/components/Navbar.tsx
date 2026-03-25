import Link from 'next/link';
import React from 'react'
import { getSession } from '../actions/session';
import { removeSession } from '../actions/session';
import Logout from './Logout';

const Navbar = async() => {
  // const session=false
  const sessionFromServer = await getSession()
  console.log("Session in Navbar",sessionFromServer)
  return (
    <div className='flex gap-4 p-4 bg-gray-200'>
        <Link href="/" className='text-xl font-bold text-yellow-950'>Contact Manager</Link>
        {
          sessionFromServer && <div className='text-l font-bold text-gray-700'>Welcome, {sessionFromServer.name}</div>
        }
        <div className='flex items-center gap-4 ml-auto'>
          {sessionFromServer ? ( 
            <Logout/>
          ) : (<div><Link href="/Login">Register</Link></div> )}
        </div>
    </div>
  )
}

export default Navbar;
