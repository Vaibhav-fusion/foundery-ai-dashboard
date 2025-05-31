"use client";

import Link from "next/link";
import { Home, Pizza, LogOut } from "lucide-react";
import { SignOutbutton } from "@/components/Sign-Out";
import { Avatar,AvatarFallback,AvatarImage } from "@/components/ui/avatar";

export function DashboardShell({ children, user }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-56 bg-white border-r p-4">
        <h1 className="text-xl font-bold mb-6">🍕 Pizza Dashboard</h1>
        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
          >
            <Home className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            href="/orders"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
          >
            <Pizza className="w-4 h-4" />
            Orders
          </Link>
        </nav>
        <div className="mt-auto pt-4">
          <SignOutbutton variant="ghost" className="w-full justify-start">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </SignOutbutton>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-end">
          <div className="flex items-center gap-2">
            <span className="text-sm">{user?.name}</span>
            <Avatar>
              <AvatarImage src={user?.image || undefined} />
              <AvatarFallback>
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}