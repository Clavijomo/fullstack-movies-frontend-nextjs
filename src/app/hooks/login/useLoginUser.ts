import { useState } from "react";
import { User } from "../../interfaces/User";
import { useRouter } from "next/navigation"
import axios from "axios";

export const useLoginUser = () => {
    const router = useRouter();

    const [user, setUser] = useState<User>({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:400/auth/login', user);
            localStorage.setItem('access_token', response.data.access_token);

            router.push('/dashboardMovies')
        } catch {
            setError('Credenciales incorrectas');
        }
    }

    const handleChange = (key: 'email' | 'password', e: string) => {
        setUser((prev) => ({
            ...prev,
            [key]: e
        }))
    }

    return {
        handleChange,
        handleSubmit,
        error,
        user
    }
}