import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { User } from "../../interfaces/User";

interface useLoginUserProps {
    endpoint: string
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export const useLoginUser = ({ endpoint, setShowModal }: useLoginUserProps) => {
    const router = useRouter();

    const [user, setUser] = useState<User>({ email: '', password: '' });
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.post(endpoint, user);
            localStorage.setItem('access_token', response.data.access_token);
            setShowModal(false);
            router.push('/dashboardMovies')
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.message);
                setShowModal(true);
            }
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