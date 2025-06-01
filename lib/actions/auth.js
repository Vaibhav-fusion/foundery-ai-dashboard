"use server"


import { signIn,signOut } from "@/auth"

import { redirect } from "next/dist/server/api-utils"


export const login = async ()=>{
    await signIn('google' , {redirectTo:'/'})

}

export const logout = async ()=>{
    await signOut ( {redirectTo:'/'})
    
}