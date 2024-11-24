import { Movie } from '@/app/interfaces/Movie'
import Image from 'next/image'
import '../../styles/movie.css'

type Props = Omit<Movie, | 'date' | 'id' | 'description' | 'tags' | 'module' | 'rating' | 'favorite' | 'relatedMovies' | 'duration' | 'moviesRecommend'>

export const CardRelated = ({ name, image }: Props) => {

    return (
        <div className='card-related'>
            <Image
                src={image}
                alt='image-movie'
                className='image-related-movie'
                width={200}
                height={250}
            />
            <div>
                <h1 className='title-movie-related'>{name}</h1>
            </div>
        </div>
    )
}
