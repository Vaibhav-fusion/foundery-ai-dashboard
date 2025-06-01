'use client';

import { logout } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => (
  <Button 
    onClick={() => logout()}
    variant="ghost"
    className="h-9 px-4 text-sm text-gray-300 hover:text-rose-400 border border-gray-800 hover:border-rose-400/50 bg-transparent hover:bg-gray-900/50 transition-all duration-200 group"
  >
    <span className="group-hover:scale-105 transition-transform duration-200">
      &nbsp;Sign Out&nbsp;
    </span>
  </Button>
);