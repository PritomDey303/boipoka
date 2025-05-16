"use client";

import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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

  const onSubmit: SubmitHandler<SignInFormInputs> = (data) => {
    console.log("Sign In Data:", data);
    // Add login logic here
  };

  return (
    <div className="w-11/12 md:w-1/3 mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">
        Sign In
      </h2>
      <p className="text-sm text-center text-gray-600 mb-6">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-700 hover:underline">
          Sign up here.
        </Link>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-1  gap-4 text-gray-700"
      >
        {/* Email */}
        <div className="col-span-full lg:col-span-1">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="col-span-full lg:col-span-1">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-full mt-4">
          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 rounded-md hover:bg-blue-900 transition cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
