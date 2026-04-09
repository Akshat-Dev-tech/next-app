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


export const addcontactsHandler = async(formData:FormData)=>{
console.log("Form data received in server action", formData)
    const name= formData.get("username")
    const email= formData.get("useremail")
    const number= formData.get("usernumber")
    const id = crypto.randomUUID()
    try{
        const res = await axios.post(API_URL,{
            id,
            name,
            email,
            phone:number,
            userId:1
        })
        console.log('result',res.status)
        return res.status
    }catch(error){
        console.error("Error adding contact", error)
    }


 
// return resizeBy.status
}

