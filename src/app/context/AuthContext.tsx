'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
    token: string | null;
    decodedToken: Record<string, any> | null;
    showModal: boolean;
    setToken: (token: string) => void;
    closeModal: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    token: null,
    showModal: true,
    decodedToken: null,
    closeModal: () => { },
    setToken: () => { },
    logout: () => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setTokenState] = useState<string | null>(null);
    const [decodedToken, setDecodedToken] = useState<Record<string, any> | null>(null);
    const [showModal, setShowModal] = useState<boolean>(true);

    const setToken = (newToken: string) => {
        setTokenState(newToken);
        localStorage.setItem('access_token', newToken);
        try {
            const decoded = jwtDecode(newToken);
            setDecodedToken(decoded);
            setShowModal(false);
        } catch (error) {
            console.error('Failed to decode token:', error);
            setDecodedToken(null);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    }

    const logout = () => {
        setTokenState(null);
        setDecodedToken(null);
        localStorage.removeItem('access_token');
    };

    useEffect(() => {
        const savedToken = localStorage.getItem('access_token');
        if (savedToken) {
            setToken(savedToken);
        }

        const handleStorageChange = () => {
            const savedToken = localStorage.getItem('access_token');
            if (savedToken) {
                return setToken(savedToken);
            }

            logout();
        }

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                token,
                showModal,
                decodedToken,
                setToken,
                closeModal,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
