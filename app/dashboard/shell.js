"use client";
import Link from "next/link";
import { Pizza, Home, Utensils } from "lucide-react";
import { SignOutButton } from "@/components/Sign-Out";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardShell({ children, user }) {
  return (
    <div >

      <header className="bg-black border-b border-gray-900 px-8 py-4">
        <div className="flex items-center justify-between">
      
          <div className="flex items-center gap-2">
            <Pizza className="w-5 h-5 text-rose-500" />
            <span className="text-sm font-medium text-gray-300">SLICE</span>
          </div>

          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="group flex items-center gap-2">
              <Home className="w-4 h-4 text-gray-400 group-hover:text-rose-500 transition-colors" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Dashboard
              </span>
            </Link>
            <Link href="/orders" className="group flex items-center gap-2">
              <Utensils className="w-4 h-4 text-gray-400 group-hover:text-rose-500 transition-colors" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Orders
              </span>
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="relative group">
              <Avatar className="w-8 h-8 border-2 border-gray-800 group-hover:border-rose-500 transition-all duration-300">
                <AvatarImage src={user?.image} />
                <AvatarFallback className="bg-gray-900 text-gray-400">
                  {user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-rose-500/30 transition-all duration-300 pointer-events-none" />
            </button>
            <SignOutButton />
          </div>
        </div>
      </header>

     
    </div>
  );
}