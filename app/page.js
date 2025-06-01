"use client";
// import { SignInButton } from "@/components/auth/sign-in-button";
import { SignInbutton } from "@/components/Sign-in";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Pizza } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default async function Home() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <>
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-3">
      
      <div className="text-center mb-12">
        <div className="mx-auto bg-rose-500/10 border border-rose-500/20 rounded-full w-24 h-24 flex items-center justify-center mb-6">
          <Pizza className="w-12 h-12 text-rose-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-200 mb-3">
          <span className="text-rose-500">Slice</span>Manager
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          Sign in to access your pizza business dashboard
        </p>
      </div>

      {/* OAuth */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 w-full max-w-md">
        <div className="space-y-6">
          <SignInbutton />
          
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative px-4 bg-gray-900/50 text-gray-500 text-sm">
              or
            </div>
          </div>
          
{/* no email working due to no bakckend thingy */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-rose-500/50"
            />
            <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium rounded-lg transition-colors">
              <span></span>SignIn with Email
            </button>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-8 text-center max-w-md ">
        Email Sign up don't work for now, Go with Google !
        <br/> sorry for inconvenience 
      </p>

      
      
    </div>

     
    </>
  );
}