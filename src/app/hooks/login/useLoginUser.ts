import { useAuth } from "@/app/context/AuthContext";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { User } from "../../interfaces/User";

interface useLoginUserProps {
    endpoint: string
    onSuccess: () => void;
}

export const useLoginUser = ({ endpoint, onSuccess }: useLoginUserProps) => {
    const { setToken } = useAuth();

    const [user, setUser] = useState<User>({ email: '', password: '' });
    const [error, setError] = useState<string>('');

    const setTokenLocalStorage = (token: string) => {
        const TOKEN_KEY = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || 'access_token';
        localStorage.setItem(TOKEN_KEY, token);
        setToken(token);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.post(endpoint, user);
            if (response.status === 201 || response.status === 200) {
                const token = response.data.access_token;
                setTokenLocalStorage(token);
                onSuccess();
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.message || 'An error ocurred while logging in');
            } else {
                setError('An unexpected error ocurred')
            }
        }
    }

    const handleChange = (key: 'email' | 'password', value: string) => {
        setUser((prev) => ({ ...prev, [key]: value }));
    }

    return {
        handleChange,
        handleSubmit,
        error,
        user
    }
}