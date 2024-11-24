import { Movie } from '@/app/interfaces/Movie';
import { ArrowBack, Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { IconButton } from '@mui/material';
import '../../styles/movie.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CircularRating from '@/app/components/shared/Rating';

interface Props { movie: Movie };

export const PosterMovie = (props: Props) => {
    const {
        image,
        name,
        date,
        duration,
        rating,
        tags,
        description,
        favorite
    } = props.movie

    const router = useRouter();

    return (
        <div className='container-detail-movie'>
            <div className='overlay' />
            <IconButton className='button-back-poster' sx={{ padding: 2 }} size='medium' onClick={() => router.back()}>
                <ArrowBack />
            </IconButton>
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
                        Oficial trailer
                        <PlayArrowOutlinedIcon />
                    </button>
                </div>
                <div>
                    <h1 className='title-movie-detail'>{name}</h1>
                    <div className='sub-info-movie'>
                        <p>{date}</p>
                        <p>{duration}min</p>
                    </div>
                    <p className='description-poster-movie'>{description}</p>
                    <div className='container-score'>
                        <div className='score'>
                            <CircularRating score={rating} />
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
    )
}
