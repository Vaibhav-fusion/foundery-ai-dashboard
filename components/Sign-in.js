"use client";

import { login } from "@/lib/actions/auth";

export const SignInbutton = () => (
  <button
    onClick={() => login()}
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    Sign in with Google
  </button>
);
