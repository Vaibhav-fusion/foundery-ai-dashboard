import { DashboardShell } from "./shell";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <DashboardShell user={session.user}>
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
      <p className="text-gray-600 mt-2">
        Ready to manage your pizza orders?
      </p>
    </DashboardShell>
  );
}