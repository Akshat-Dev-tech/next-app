"use server"

import axios from "axios"

const API_URL="http://localhost:3001/contacts"

export const getContacts = async(userId:number, formData)=>{ 
    const userFormId = formData.get("contactType")
    const res = await axios.get(`${API_URL}?userId=${userFormId}`)
    console.log("Contacts from API",res)
    return res.data
}