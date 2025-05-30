"use client"

import { login } from "@/lib/actions/auth";

export const SignInbutton = ()=>{

     return <button onClick={()=>{login()}}> Sign in with Google</button>
    

}