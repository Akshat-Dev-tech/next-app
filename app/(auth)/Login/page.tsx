import LoginForm from '@/app/components/LoginForm'
import React from 'react'
import Link from 'next/link'
import styles from './login.module.css'
const page = () => {
  return (
    <div className={styles.aligncenter}>
        <div className='font-bold text-center'>Login</div>
        <LoginForm />
        <span className='text-center text-gray-500'>
            Dont have an account ?
            <Link href="/" className='text-blue-400'> Register here</Link>
        </span>
    </div>
  )
}

export default page