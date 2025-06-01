'use client';

import { login } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";

export const SignInbutton = () => (
 <Button onClick={() => login()}  className="p-5 text-0. text-black bg-gray-200 hover:text-white hover:bg-black hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
  >
  &nbsp;&nbsp;Sign in with Google&nbsp;&nbsp;
</Button>

);
