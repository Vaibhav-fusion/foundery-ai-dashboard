"use client"

import { login, logout } from "@/lib/actions/auth";

export const SignOutbutton = ()=>{

     return <button onClick={()=>{logout()}}> Sign out!</button>
    

}