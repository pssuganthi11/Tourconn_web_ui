"use client";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import heroImage from "@/public/img/hero-travel.jpg";
import planeTrail from "@/public/img/plane-trail.png";
import landmarks from "@/public/img/landmarks.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const USERS = [
  { email: "admin@gmail.com", password: "Admin@123", role: "admin" },
  { email: "vendor@gmail.com", password: "Vendor@123", role: "vendor" },
  { email: "user@gmail.com", password: "User@123", role: "user" },
];

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const matchedUser = USERS.find(
        (u) => u.email === email && u.password === password
      );

      if (!matchedUser) {
        setError("Invalid email or password");
        return;
      }

      const Role = matchedUser.role;

      sessionStorage.setItem("token", Date.now().toString());
      sessionStorage.setItem("role", Role);

      if (Role === "vendor") {
        router.replace("/vendor/dashboard");
      } else if (Role === "admin") {
        router.replace("/admin/dashboard");
      } else {
        router.replace("/"); 
      }

      router.refresh();
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex w-full min-h-[100dvh] flex-col lg:flex-row">
      <div className="relative hidden md:flex w-full items-end justify-start lg:min-h-screen lg:w-1/2">
        <Image
          src={heroImage}
          alt="Traveler at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          width={768}
          height={1024}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 p-8 pb-12 lg:p-12 lg:pb-16">
          <h1 className="text-4xl font-bold text-white italic leading-tight lg:text-5xl xl:text-6xl">
            Tour Conn
          </h1>
          <p className="mt-3 max-w-md text-base lg:text-lg text-white/90">
            Travel is the only purchase that enriches you in ways beyond
            material wealth
          </p>
        </div>
      </div>

      {/* Right Login Panel */}
      <div className="relative flex w-full flex-col justify-between min-h-[100dvh] px-6 py-6 lg:w-1/2 lg:px-12 lg:py-0">
        <Image
          src={planeTrail}
          alt="image of plane trail"
          className="pointer-events-none absolute right-4 top-4 w-20 opacity-60 lg:right-8 lg:top-8 lg:w-28"
          width={512}
          height={512}
        />

        <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <h2 className="text-center text-4xl font-bold lg:text-5xl">
            Welcome
          </h2>

          <p className="mt-1 text-center text-xl font-semibold text-[#1a706d]">
            Login
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email Id
              </label>
              <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-2 bg-white">
                <Mail className="h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full text-sm text-gray-900 outline-none placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-2 bg-white">
                <Lock className="h-4 w-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full text-sm text-gray-900 outline-none placeholder:text-gray-400"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            {error && (
              <p className="text-red-500 text-sm text-start">{error}</p>
            )}
            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-xs text-gray-500 hover:text-[#1a706d]"
              >
                Forgot your password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#1a706d] py-3 text-sm font-semibold uppercase cursor-pointer text-white shadow-lg hover:bg-[#155a57] transition-all"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm">
            Don't have account?{" "}
            <Link href="/auth/register">
              <span className="font-semibold text-[#1a706d] hover:underline cursor-pointer">
                Register Now
              </span>
            </Link>
          </p>
        </div>

        <Image
          src={landmarks}
          alt="image of landmarks"
          className="pointer-events-none absolute bottom-[-80px] left-0 w-full opacity-20 hidden sm:block"
          width={1024}
          height={512}
        />
      </div>
    </div>
  );
};

export default LoginPage;