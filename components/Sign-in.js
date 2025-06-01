'use client';

import { login } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";


export const SignInbutton = () => (
 <Button onClick={() => login()}  className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 font-medium py-3 rounded-lg transition-colors"
    >
      <div className="flex items-center justify-center gap-3">
        <FcGoogle className="w-5 h-5" />
        <span>Continue with Google</span>
      </div>
</Button>

);
