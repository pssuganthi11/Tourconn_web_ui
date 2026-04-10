"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import heroImage from "@/public/img/hero-travel.jpg";
import planeTrail from "@/public/img/plane-trail.png";
import landmarks from "@/public/img/landmarks.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ For redirection

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Traveller");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

 const handleRegister = (e: React.FormEvent) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const existingUsersRaw = sessionStorage.getItem("allUsers");
  const usersList = existingUsersRaw ? JSON.parse(existingUsersRaw) : [];

  const userExists = usersList.find((u: any) => u.email === email);
  if (userExists) {
    alert("This email is already registered!");
    return;
  }

  const newUser = {
    name,
    email,
    password,
    role: role.toLowerCase() === "traveller" ? "user" : "vendor", 
  };

  //  Add new user
  usersList.push(newUser);
  sessionStorage.setItem("allUsers", JSON.stringify(usersList));
  
  alert("Registration Successful! You can now login.");
  router.push("/auth/login");
};

  return (
    <div className="flex w-full min-h-[100dvh] flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="relative flex w-full flex-col justify-between min-h-[100dvh] px-6 py-6 lg:w-1/2 lg:px-12 lg:py-0">
        <Image
          src={planeTrail}
          alt="plane"
          className="pointer-events-none absolute left-4 top-4 w-20 -scale-x-100 opacity-60 lg:left-8 lg:top-8 lg:w-28"
          width={512}
          height={512}
        />

        <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <h2 className="text-center text-4xl font-bold lg:text-5xl">
            Register
          </h2>

          <p className="mt-1 text-center text-sm text-[#1a706d]">
            Create your account
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleRegister}>
            
            <div>
              <label className="mb-1 block text-xs text-gray-500">
                Full Name
              </label>
              <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm">
                <User className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent text-sm text-gray-800 outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-xs text-gray-500">
                Email Id
              </label>
              <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm">
                <Mail className="h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full bg-transparent text-sm text-gray-800 outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-xs text-gray-500">
                Password
              </label>
              <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm">
                <Lock className="h-4 w-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent text-sm text-gray-800 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-1 block text-xs text-gray-500">
                Confirm Password
              </label>
              <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm">
                <Lock className="h-4 w-4 text-gray-400" />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-transparent text-sm text-gray-800 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Role Selection
            <div>
              <label className="mb-2 block text-xs text-gray-500">
                Select Role
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="Traveller"
                    checked={role === "Traveller"}
                    onChange={(e) => setRole(e.target.value)}
                    className="accent-[#1a706d]"
                  />
                  Traveller
                </label>

                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="vendor"
                    checked={role === "vendor"}
                    onChange={(e) => setRole(e.target.value)}
                    className="accent-[#1a706d]"
                  />
                  Vendor
                </label>
              </div>
            </div> */}

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#1a706d] py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-[#155a57] transition"
            >
              Register
            </button>
          </form>

          {/* Login Redirect */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-[#1a706d] hover:underline"
            >
              To Login
            </Link>
          </p>
        </div>

        <Image
          src={landmarks}
          alt=""
          className="pointer-events-none absolute bottom-[-80px] left-0 w-full opacity-20 hidden sm:block"
        />
      </div>

      {/* Right Panel */}
      <div className="relative hidden md:flex w-full items-end lg:min-h-screen lg:w-1/2">
        <Image
          src={heroImage}
          alt="Traveler"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 p-8 pb-12 text-white lg:p-12 lg:pb-16">
          <h1 className="text-4xl font-bold italic leading-tight lg:text-5xl xl:text-6xl">
            Tour Conn
          </h1>

          <p className="mt-3 max-w-md text-base text-gray-200 lg:text-lg">
            Your journey of a thousand miles begins with a single step
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
