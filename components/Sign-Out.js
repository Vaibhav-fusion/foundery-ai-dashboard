"use client";

import { logout } from "@/lib/actions/auth";

export const SignOutbutton = () => (
  <button
    onClick={() => logout()}
    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
  >
    Sign out
  </button>
);
