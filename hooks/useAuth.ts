'use client';

import { useCheckAuthQuery } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuth() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthResolved, setIsAuthResolved] = useState(false);
    const { data, isLoading, isSuccess, isError } = useCheckAuthQuery({});

    useEffect(() => {
        if (isSuccess && data) {
            setIsAuthenticated(true);
            setIsAuthResolved(true);
        } else if (!isLoading && (isError || !data)) {
            setIsAuthenticated(false);
            setIsAuthResolved(true);
        }
    }, [isSuccess, isError, router, isLoading, data]);

    return {
        isAuthenticated,
        isAuthResolved,
        user: data,
        isLoading,
    };
}
