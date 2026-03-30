"use server"
import { cookies } from "next/headers"
import { userType } from "./auth"
import { redirect } from "next/navigation"
export const setSession = async( user : userType)=>{
console.log("Setting session in cookies",user)
const cookieStore = await cookies()

cookieStore.set("usersession", JSON.stringify(user))
}

export const getSession = async()=>{
    const cookieStore = await cookies()
    const session = cookieStore.get("usersession")
    console.log("Session from cookies",session)
    let sessionValue = null
    if(session?.value){
        console.log("Session value",session.value)
        sessionValue = JSON.parse(session.value)

    }
    return sessionValue
}

export const removeSession = async()=>{
    const cookieStore = await cookies()
    cookieStore.delete("usersession")
    redirect("/Login")
}