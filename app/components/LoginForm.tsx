"use client"
import React from 'react'
import authenticateUser from '../actions/auth'
import { useActionState } from 'react'
const LoginForm = () => {
  const[state,formAction,isPending]=useActionState(authenticateUser, null)
  return (
    <form action={formAction} method='POST'>
      {/* Email */}
      <div className='flex flex-col gap-2 mb-4'>
        <label htmlFor="email">Email</label>
        <input id="email" type='email' name="email" placeholder='Enter your email' className='border-black border-1 rounded-lg p-2' required/>
      </div>
      {/* Password */}
      <div className='flex flex-col gap-2 mb-4'>
        <label htmlFor="password">Password</label>
        <input id="password" type='password' name="password" placeholder='Enter Password' className='border-black border-1 rounded-lg p-2' minLength={9} />
      </div>
      {/* submit form */}
      <div className='flex flex-col gap-2 mb-4'>
        <button type='submit' className='bg-blue-500 text-white rounded-lg p-2'>Login</button>
      </div>
      {
        isPending && <div>Loading...</div>
      }
      {
        state?.sucess && <div>Login Sucessful</div>
      }
      {
        state?.error && <div>Login Failed</div>
      }
    </form>
  )
}
export default LoginForm;
