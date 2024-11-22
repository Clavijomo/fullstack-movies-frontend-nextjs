import { Movie } from '@/app/interfaces/Movie';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import axios from 'axios';
import Image from 'next/image';
import '../../styles/movie.css';
import { CardRelated } from './_CardRelated';

async function fetchMovie(id: number): Promise<Movie> {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_GET_MOVIES_MOVIE}`, {
            "movieId": id
        })
        let movie: Movie = response.data
        if (response.data.relatedMovies.length > 0) {
            let relatedMovies: Movie[] = await fetchRecommendMovies(response.data.relatedMovies)
            if (relatedMovies && relatedMovies.length > 0) {
                movie.moviesRecommend = relatedMovies;
            }
        }

        return movie;

    } catch (error: any) {
        if (error.response?.status === 404) {
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


const MovieDetails = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const movie = await fetchMovie(Number(id));
    const {
        date,
        name,
        description,
        rating,
        tags,
        duration,
        moviesRecommend,
        favorite,
        image,
    } = movie;

    return (
        <div className='container-grid-movies'>
            <div className='container-detail-movie'>
                <div className='overlay' />
                <div className='detail-movie'>
                    <div className='section-trailer-movie'>
                        <Image
                            src={image}
                            alt='movie'
                            width={200}
                            className='image'
                            height={200}
                        />
                        <button>
                            Official trailer
                            <PlayArrowOutlinedIcon />
                        </button>
                    </div>
                    <div>
                        <h1 className='title-movie'>
                            {name}
                        </h1>
                        <div className='sub-info-movie'>
                            <p>{date}</p>
                            <p>{duration}min</p>
                        </div>
                        <p>{description}</p>
                        <div className='container-score'>
                            <div className='score'>
                                <h3>{rating}</h3>
                                <p>Users Score</p>
                            </div>
                            <div>
                                {favorite === true ? <Favorite /> : <FavoriteBorderOutlined />}
                            </div>
                        </div>
                        {tags && tags.length > 0 &&
                            <div className='tag-container'>
                                {tags.map((tag, i) => (
                                    <p className='tag' key={i}>{tag}</p>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className='container-related'>
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