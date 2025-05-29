"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useCreateUserMutation } from "@/redux/api/authApi";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
};

export default function Page() {
  const [createUser, { isLoading }] = useCreateUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const password = watch("password");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const message = await createUser(data).unwrap();
      setSuccess(message);
      setErrorMessage(null);
      reset();
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setErrorMessage(err as string);
      setSuccess(null);
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };

  return (
    <div className="w-11/12 max-w-xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-10">
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
        className="space-y-5 text-gray-700"
      >
        <div className="form-control">
          <label className="label font-medium">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="form-control">
          <label className="label font-medium">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="input input-bordered w-full focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="form-control">
          <label className="label font-medium">
            Mobile Number (with country code)
          </label>
          <input
            type="tel"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^\+\d{1,4}\d{6,14}$/,
                message: "Use country code (e.g. +8801234567890)",
              },
            })}
            className="input input-bordered w-full focus:outline-none"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="form-control relative flex-1">
            <label className="label font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
              className="input input-bordered w-full pr-12 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-10 text-gray-500 hover:text-gray-700 focus:outline-none"
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="form-control relative flex-1">
            <label className="label font-medium">Confirm Password</label>
            <input
              type={showConfirm ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="input input-bordered w-full pr-12 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((prev) => !prev)}
              className="absolute right-3 top-10 text-gray-500 hover:text-gray-700 focus:outline-none"
              tabIndex={-1}
              aria-label={
                showConfirm ? "Hide confirm password" : "Show confirm password"
              }
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-primary w-full bg-blue-950 text-white hover:bg-blue-900 transition"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </form>
      <div className="my-5">
        {success && (
          <p className="text-green-600 text-center mb-4">{success}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 text-center mb-4">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
