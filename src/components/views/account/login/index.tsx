"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  // Variable to get typed email
  const [email, setEmail] = useState("");

  // Variable to get typed password
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="py-12 md:py-16 flex flex-col items-center bg-white">
      {/* Login Heading */}
      <h1 className="text-2xl md:text-3xl text-gray-800">Login</h1>

      {/* Underline */}
      <div className="w-8 h-[2px] md:h-[4px] lg:h-[3px] bg-gray-800 mt-1 md:mt-2 "></div>

      {/* Email Input */}
      <input
        type="email"
        className="w-5/6 md:w-3/5 lg:w-2/5 p-4 text-gray-800 placeholder-gray-500 border border-gray-400 focus:outline-none my-6"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />

      {/* Password Input */}
      <input
        type="password"
        className="w-5/6 md:w-3/5 lg:w-2/5 p-4 text-gray-800 placeholder-gray-500 border border-gray-400 focus:outline-none"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />

      {/* Forget Password Link*/}
      <Link
        href="#"
        className="text-red-600 hover:text-gray-600 text-sm mt-5 underline underline-offset-4 transition-colors duration-200"
      >
        Forgot your password?
      </Link>

      {/* Signin Button */}
      <button className="h-14 px-10 text-[15px] text-white font-light my-10 bg-gray-800 w-5/6 md:w-3/5 lg:w-2/5 rounded-sm hover:bg-white border border-black hover:text-gray-800 transition-colors duration-200">
        SIGN IN
      </button>

      {/* Create Account */}
      <Link
        href="#"
        className="text-red-600 hover:text-gray-600 text-sm underline underline-offset-4 transition-colors duration-200"
      >
        Create Account
      </Link>

      {/* Return to Store */}
      <Link
        href="#"
        className="text-red-600 hover:text-gray-600 text-sm mt-4 underline underline-offset-4 transition-colors duration-200"
      >
        Return to Store
      </Link>
    </div>
  );
}
