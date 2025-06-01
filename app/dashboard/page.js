import Floating from "@/components/floating";
import { DashboardShell } from "./shell";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Pizza, ChevronRight } from "lucide-react";
import { Award } from "lucide-react";

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/");

  const mockEmployees = [
    "Alex",
    "Priya",
    "Sam",
    "Ravi",
    "Mia",
    "Zhang",
    "Tariq",
  ];
  const randomName =
    mockEmployees[Math.floor(Math.random() * mockEmployees.length)];

  return (
    <>
      <DashboardShell user={session.user}  style={{ boxShadow: '0 10px 30px rgba(30, 30, 30, 0.9)' }} />

      <div className="h-screen flex flex-col justify-center items-center space-y-16 bg-black  ">
        <div className="text-center  p-10 ">
          <h1 className="text-7xl font-bold text-white">
            HI, <span className="text-rose-500">{session.user.name}</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl">
            Welcome to your pizza Dashboard, this is today's report sir!
          </p>
        </div>

        <div className="w-full max-w-4xl space-y-12 gap-4">
          <div className="flex justify-between items-center border-b border-gray-800 pb-5" >
            <div className="space-y-1">
              <p className="text-gray-500 text-lg">Today's Orders</p>
              <p className="text-4xl font-light text-white">24</p>
            </div>
            <ChevronRight className="w-8 h-8 text-gray-600" />
          </div>

          <div className="flex justify-between items-center border-b border-gray-800 pb-8"  >
            <div className="space-y-1">
              <p className="text-gray-500 text-lg">Pending Actions</p>
              <p className="text-4xl font-light text-white">3</p>
            </div>
            <ChevronRight className="w-8 h-8 text-gray-600" />
          </div>
        </div>

        <Floating />

        <h3 className="text-gray-300 " >
          <Award className="w-6 h-6 text-yellow-400 inline" /> Employee of the Year:{" "}
          <span className="text-rose-400 font-semibold">{randomName}</span>
        </h3>
      </div>
    </>
  );
}
