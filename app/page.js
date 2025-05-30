"use server";

import Image from "next/image";
import { auth } from "@/auth";
import { SignInbutton } from "@/components/Sign-in";
import { SignOutbutton } from "@/components/Sign-Out";

export default async function Home() {
  const session = await auth();
  console.log(session);

  if (session) {
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
    <div className="text-3xl font-bold underline text-orange-600">
      <p>You are not sign in</p>
      <SignInbutton />
    </div>
  );
}