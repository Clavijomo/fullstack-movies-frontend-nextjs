'use client'

import { Movie } from '@/app/interfaces/Movie';
import axios, { AxiosError } from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import '../../styles/movie.css';
import { CardRelated } from './_CardRelated';
import { PosterMovie } from './_PosterMovie';

async function fetchMovie(id: number): Promise<Movie> {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_GET_MOVIES_MOVIE}`, {
            "movieId": id
        })
        const movie: Movie = response.data
        if (response.data.relatedMovies.length > 0) {
            const relatedMovies: Movie[] = await fetchRecommendMovies(response.data.relatedMovies)
            if (relatedMovies && relatedMovies.length > 0) {
                movie.moviesRecommend = relatedMovies;
            }
        }

        return movie;

    } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 404) {
            console.log(error)
            throw new Error('Movie not Found')
        }
        throw new Error('Failed to fetch');
    }
}

async function fetchRecommendMovies(idsMovies: number[]): Promise<Movie[]> {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_GET_MOVIES_RECOMMEND}`, {
            "recommend": idsMovies
        })
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 404) {
            throw new Error('Movie not Found')
        }
        throw new Error('Failed to fetch');
    }
}


const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMovie = async () => {
            try {
                setIsLoading(true);
                const fetchedMovie = await fetchMovie(Number(id));
                setMovie(fetchedMovie);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        window.scrollTo(0, 0);
        loadMovie();

        document.body.classList.add('dashboard-movie');
        return () => document.body.classList.remove('dashboard-movie');
    }, [id]);

    if (isLoading) {
        return (
            <div className="loading-screen">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    if (error || !movie) {
        return (
            <div className="error-screen">
                <h1>Oops!</h1>
                <p>{error || 'Movie not found'}</p>
                <button onClick={() => window.history.back()}>Go Back</button>
            </div>
        );
    }

    const { moviesRecommend } = movie;

    return (
        <div className='container-grid-movies'>
            <PosterMovie movie={movie} />
            <div className='movie-container-related'>
                {moviesRecommend && moviesRecommend.length > 0 &&
                    <div>
                        <h2>Recommendations</h2>
                        <div className='relates-movies'>
                            {moviesRecommend.map((related, i) => (
                                <CardRelated
                                    {...related}
                                    key={i}
                                />
                            ))}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MovieDetails;