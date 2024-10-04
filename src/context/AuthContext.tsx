'use client'
import { AuthContextType, UserData } from "@/interfaces/Userinterface";
import React, { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
type childrenProps = {
    children: React.ReactNode
}
export const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({ children }: childrenProps) => {
    const cookies = new Cookies();
    const [currentUser, setCurrentUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const data = cookies.get("DATA");
    useEffect(() => {
        if (data) {
            setCurrentUser(data);
            setLoading(false)
        }
        else {
            setCurrentUser(null)
            setLoading(false)
        }
    }, []);
    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};