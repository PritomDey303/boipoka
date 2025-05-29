"use client";
import { useVerifyEmailQuery } from "@/redux/api/authApi";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  console.log(token);
  const { isLoading, isError, isSuccess } = useVerifyEmailQuery(token ?? "", {
    skip: !token,
  });
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        router.push("/signin");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, router]);
  return (
    <div className="min-h-screen  py-4">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full mx-auto mt-10">
        {isLoading && <p className="text-gray-700">Verifying your email...</p>}

        {isSuccess && (
          <div>
            <h1 className="text-2xl font-semibold mb-2 text-green-600">
              Email verified!
            </h1>
            <p className="text-gray-600">You can now log in to your account.</p>
          </div>
        )}
        {isError && (
          <div>
            <h1 className="text-2xl font-semibold mb-2 text-red-600">
              Verification failed
            </h1>
            <p className="text-gray-600">Invalid or expired token.</p>
          </div>
        )}
      </div>
    </div>
  );
}
