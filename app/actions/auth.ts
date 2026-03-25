"use server"

import axios from "axios";
import { error } from "console";
import { redirect } from "next/navigation";
const API_URL = "http://localhost:3001/users"

type userType ={
    id:number,
    name:string,
    email:string,
    password:string
}

const authenticateUser = async (prevState,formData:FormData) => {
    const res = await axios.get<userType[]>(`${API_URL}?email=${formData.get("email")}&password=${formData.get("password")}`).catch(
        err=>{console.log(err)
        return null}
    )
    console.log("Response from API",res.data)
    console.log("Authenticating user on server...",formData)
    console.log("prevState",prevState)
    const user:userType = res.data[0]
    if(!user){
        console.log("Authentication failed")
        return {
            sucess:false,
            error:true
        }
    }else{
        console.log("Authentication successful")
        redirect("/managepage")
    }
    return {
        sucess:true,
        error:false
    }
}
export default authenticateUser;