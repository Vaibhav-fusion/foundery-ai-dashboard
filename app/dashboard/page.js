import { auth } from "@/auth";
import { SignOutbutton } from "@/components/Sign-Out";
import { redirect } from "next/navigation";
import Image from "next/image";


export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  console.log(session.user);

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
