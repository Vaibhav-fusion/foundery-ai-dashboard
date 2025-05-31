"use server";

import { auth } from "@/auth";
import { SignInbutton } from "@/components/Sign-in";
// import { SignOutbutton } from "@/components/Sign-Out";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  console.log(session);

  if (session) {
    redirect("/dashboard")
  }
  return (
     <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="h-[70vh] w-[30vw] bg-black flex items-center justify-around flex-col border-gray-700 border-1 rounded-2xl  hover:scale-101 hover:border-rose-400 transition-all duration-300 ease-in-out ">
            <p className="text-5xl text-rose-500">Pizzadop</p>
            <SignInbutton />
          
        </div>
    </div>
  );
}