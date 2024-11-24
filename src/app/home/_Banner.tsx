import { FavoriteBorderOutlined, FavoriteRounded } from '@mui/icons-material';
import { BannerMovie } from '../interfaces/Movie';
import '../styles/home.css';

interface Props {
    bannerMovie: BannerMovie
}

export const Banner = ({ bannerMovie }: Props) => {
    const {
        description,
        favorite,
        name,
        rating
    } = bannerMovie;

    return (
        <div
            style={{
                backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/03/34/31/36/1000_F_334313696_MbYwDI0quHDozWAwlgfb6Oiw9BdevWr7.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            className='banner'
        >
            <div className='overlay-banner' />
            <div className='title-container-banner'>
                <h1 className='title-banner'>{name}</h1>
                <p>{description}</p>
            </div>
            <div className='rating-movie-banner'>
                <h3>{rating}</h3>
                {favorite ? <FavoriteRounded /> : <FavoriteBorderOutlined />}
            </div>
        </div>
    )
}
