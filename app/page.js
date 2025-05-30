"use server";

import { auth } from "@/auth";
import { SignInbutton } from "@/components/Sign-in";
import { SignOutbutton } from "@/components/Sign-Out";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  console.log(session);

  if (session) {


    redirect("/dashboard")


    
    return (
      <div>
        <p>Hey, thanks for signing up here!</p>

        <p>{session.user.name} What do you like to eat!</p>
        <p>{session.user.email} all order will be on your mail</p>
        {session.user.image && (
          <Image
            src={session.user.image}
            width={47}
            height={48}
            className="rounded-full"
            alt="User profile"
          />
        )}
        <SignOutbutton />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Pizza Dashboard</h1>
        <p className="mb-6">Sign in to manage your pizza orders!</p>
        <SignInbutton />
      </div>
    </div>
  );
}