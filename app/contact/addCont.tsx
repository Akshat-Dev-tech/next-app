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

  return (
    <div>
        <h1  className={`text-3xl font-bold align-context-center ${alignContextCenter} ${displayflex}`}>Add Contacts</h1>
        <form onSubmit={contactsHandler} className={`${displayflex} ${parent}`}>
            {/* <input type="text" placeholder='Enter name'  onChange={(e)=>setName(e.target.value)}></input> */}
            <input type="text" placeholder='Enter name' name="username"></input>
            <input type="text" placeholder=' Enter email' name="useremail"></input>
            <input type="text" placeholder='Enter number' name="usernumber"></input>
            <button type='submit'>Add Contact</button>
        </form>
    </div>
  )
}
export default AddCont