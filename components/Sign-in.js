'use client';

import { login } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";

export const SignInbutton = () => (
 <Button onClick={() => login()}  className="p-5 text text-black bg-gray-200 hover:text-white hover:bg-black hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out">
  &nbsp;&nbsp;Sign in with Google&nbsp;&nbsp;
</Button>

);
