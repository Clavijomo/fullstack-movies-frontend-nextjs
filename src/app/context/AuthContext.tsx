'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
    token: string | null;
    decodedToken: Record<string, any> | null;
    setToken: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    token: null,
    decodedToken: null,
    setToken: () => { },
    logout: () => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setTokenState] = useState<string | null>(null);
    const [decodedToken, setDecodedToken] = useState<Record<string, any> | null>(null);

    const setToken = (newToken: string) => {
        setTokenState(newToken);
        localStorage.setItem('access_token', newToken);
        try {
            const decoded = jwtDecode(newToken);
            setDecodedToken(decoded);
        } catch (error) {
            console.error('Failed to decode token:', error);
            setDecodedToken(null);
        }
    };

    const logout = () => {
        setTokenState(null);
        setDecodedToken(null);
    };

    useEffect(() => {
        const savedToken = localStorage.getItem('access_token');
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, decodedToken, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
