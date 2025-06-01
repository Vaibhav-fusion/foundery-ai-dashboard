// app/dashboard/orders/page.js (Server Component)
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Ordershandling from "./orderhandling";

export default async function OrdersPage() {

  const session = await auth();
//   console.log(session)
  if (!session) redirect("/");

  return <Ordershandling user={session.user} />
}
