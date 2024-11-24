'use client'

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from "next/image";
import { PosterMovie } from "../interfaces/Movie";
import '../styles/home.css';
import { useRouter } from 'next/navigation';

export const CardMovie = (props: PosterMovie) => {
    const router = useRouter();
    const {
        favorite,
        name,
        date,
        image,
        id,
        rating,
    } = props

    const handleClick = () => {
        router.push(`home/${id}`)
    }

    return (
        <div onClick={handleClick} className="card-movie">
            <Image
                className="image-movie"
                src={image}
                width={200}
                height={223}
                alt="movie-alt"
            />
            <div className="poster-description">
                <h1 className="title-movie">{name}</h1>
                <p className="description-movie">{date}</p>
                <div className="container-info-add">
                    <div>
                        <p>Rating</p>
                        <p>{rating}</p>
                    </div>
                    <div>
                        <p>Favorites</p>
                        <p>{favorite === true ? <FavoriteBorderIcon fontSize='small' /> : <FavoriteIcon fontSize='small' />}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}