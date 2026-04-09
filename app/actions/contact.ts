"use server"

import axios from "axios"

const API_URL="http://localhost:3001/contacts"
type userType = {
    id:string,
    name:string,
    email:string,
    phone:string,
    userId:string
}
type prevStateType = boolean | userType[]
export const getContacts = async(prevState : prevStateType , userId:number)=>{ 
    // const userFormId = formData.get("contactType")
    console.log("User ID from form data",userId, prevState)
    const res = await axios.get<userType[]>(`${API_URL}?userId=${userId}`)
    console.log("Contacts from API",res)
    return res.data
}


export const addContact = async(formData:FormData)=>{


}

