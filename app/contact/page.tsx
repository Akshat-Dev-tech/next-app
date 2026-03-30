"use client"
import React, { useActionState } from 'react'
import { getContacts } from '../actions/contact'
const page = () => {
    const [state, formAction,  isPending ] = useActionState(getContacts, null)
    console.log("Contacts state",state)
  return (
    <form action={formAction} method='POST'>
        <div>Contact Page</div>
        <button name="contactType" value={1}>Show contacts</button>
        {
            isPending && <div>Loading...</div>
        }
        {
            state && state.length > 0 && (
             state.map((contact:any)=>(
                <div key={contact.id}>
                    <p>Name: {contact.name} {contact.userId}</p>
                    <p>Email: {contact.email}</p>
                    <></>
                </div>
             )
            ))
        }
    </form>
  )
}

export default page;
