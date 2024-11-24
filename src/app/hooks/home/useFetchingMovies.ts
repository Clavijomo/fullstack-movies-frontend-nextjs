import { Movie } from "@/app/interfaces/Movie"
import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchingMovies = () => {
    const [listMovies, setListMovies] = useState<Movie[]>([]);
    const [randomMovie, setRandomMovie] = useState<Movie | null>(null);

    useEffect(() => {
        fetchingData();
    }, [])

    const fetchingData = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_GET_MOVIES}`
            )
            if (response.status === 200 || response.statusText === 'OK') {
                const movies = response.data;
                setListMovies(movies);

                if (movies.length > 0) {
                    const randomIndex = Math.floor(Math.random() * movies.length);
                    setRandomMovie(movies[randomIndex]);
                }
            }
        } catch {
            throw new Error('Hubo un error')
        }
    }

    return { listMovies, randomMovie };
}