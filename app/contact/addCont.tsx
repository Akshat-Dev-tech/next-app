"use client"
import React from 'react'
import styles from './contacts.module.css'
const AddCont = () => {
    // const alignContextCenter = styles["align-context-center"];
    const { "align-context-center": alignContextCenter , "display-flex-center" :displayflex ,parent} = styles

    // const [name, setName]=React.useState('')
    const contactsHandler = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const name= formdata.get("username")
        const email= formdata.get("useremail")
        const number= formdata.get("usernumber")
        console.log(name,email,number)
        // console.log(Form)
    }

        // In Normal JS 
        // 1. When the input is invalid, set your message
        // onInvalid={(e) => e.target.setCustomValidity("Whoops! We need at least 3 letters for the name.")}
        // 2. Clear the message when the user starts typing again, or it will stay 'invalid' forever
        // onInput={(e) => e.target.setCustomValidity("")}

  return (
    <div>
        <h1  className={`text-3xl font-bold align-context-center ${alignContextCenter} ${displayflex}`}>Add Contacts</h1>
        <form onSubmit={contactsHandler} className={`${displayflex} ${parent}`}>
            {/* <input type="text" placeholder='Enter name'  onChange={(e)=>setName(e.target.value)}></input> */}
            <input type="text" placeholder='Enter name' name="username" required minLength={5}></input>
            <input type="email" placeholder=' Enter email' name="useremail" required ></input>
            <input type="tel" placeholder='Enter number' name="usernumber" required pattern="[0-9]{10}"
            // Cast e.target as an HTMLInputElement
            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Please enter exactly 10 digits.")}
            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
            ></input>
            <button>Add Contact</button>
        </form>
    </div>
  )
}
export default AddCont