"use server"

import axios from "axios";
import { error } from "console";
import { redirect } from "next/navigation";
import { setSession } from "./session";
const API_URL = "http://localhost:3001/users"

export type userType ={
    id:number,
    name:string,
    email:string,
    password?:string
} | null

type prevState = {
    sucess:boolean,
    error:boolean
} | null

const authenticateUser = async (prevState : prevState,formData:FormData) => {
    const res = await axios.get<userType[]>(`${API_URL}?email=${formData.get("email")}&password=${formData.get("password")}`).catch(
        err=>{console.log(err)
        return null}
    )
    console.log("Response from API",res?.data)
    console.log("Authenticating user on server...",formData)
    console.log("prevState",prevState)
    const user:userType = res?.data[0] || null
    if(!user){
        console.log("Authentication failed")
        return {
            sucess:false,
            error:true
        }
    }else{
        await setSession({id:user.id,name:user.name,email:user.email})
        console.log("Authentication successful")
        redirect("/contact")
    }
    return {
        sucess:true,
        error:false
    }
}
export default authenticateUser;