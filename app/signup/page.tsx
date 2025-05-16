"use client";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    alert("Signup successful!");
  };

  const password = watch("password");

  return (
    <div className="w-9/10 md:w-1/2 mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
      <p className="text-sm text-center text-gray-600 mb-6">
        Already have an account?{" "}
        <Link href="/signin" className="text-blue-700 hover:underline">
          Sign In here.
        </Link>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-700"
      >
        {/* Name */}
        <div className="col-span-full lg:col-span-1">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

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

        {/* Mobile */}
        <div className="col-span-full lg:col-span-1">
          <label className="block text-sm font-medium mb-1">
            Mobile Number (with country code)
          </label>
          <input
            type="tel"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^\+\d{1,4}\d{6,14}$/,
                message:
                  "Enter a valid mobile number with country code (e.g. +8801234567890)",
              },
            })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile.message}</p>
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

        {/* Confirm Password */}
        <div className="col-span-full lg:col-span-1">
          <label className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button (full width) */}
        <div className="col-span-full mt-4">
          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 rounded-md hover:bg-blue-900 transition cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
