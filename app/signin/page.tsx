"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

type SignInFormInputs = {
  email: string;
  password: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<SignInFormInputs> = (data) => {
    console.log("Sign In Data:", data);
    // Add login logic here
  };

  return (
    <div className="w-11/12 max-w-md mx-auto p-8 bg-base-100 shadow-xl rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-2 text-center text-primary">
        Sign In
      </h2>
      <p className="text-sm text-center text-gray-500 mb-6">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign up here.
        </Link>
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Email Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="you@example.com"
            className="input input-bordered w-full focus:outline-none focus:ring-0"
          />
          {errors.email && (
            <p className="text-error text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        {/* password field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Password</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="•••••••"
              className="input input-bordered w-full pr-12 focus:outline-none focus:ring-0"
            />
            {/* Eye icon: stays visible on focus */}
            <div className="absolute inset-y-0 right-3 flex items-center">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {errors.password && (
            <p className="text-error text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="btn btn-primary w-full text-white font-semibold"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
