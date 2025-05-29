"use client";
import AuthLoader from "@/components/Loaders/AuthLoader";
import WishlistCard from "@/components/wishlist/WishlistCard";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

import React from "react";

export default function Page() {
  const router = useRouter();
  const { isAuthResolved, isAuthenticated } = useAuth();

  if (!isAuthResolved) {
    return <AuthLoader />;
  }
  if (!isAuthenticated) {
    router.push("/signin");
  } else {
    return (
      <section className="min-h-screen p-3">
        <div className="rounded-xl bg-white p-5 md:p-10 shadow-xl mt-5 text-gray-700 w-full md:w-8/10 mx-auto">
          <h1 className="text-3xl font-semibold">Wishlist</h1>
          <hr className="border-t-2 border-dotted border-gray-400 my-1" />
          <div>
            <WishlistCard />
            <WishlistCard />
          </div>
        </div>
      </section>
    );
  }
}
