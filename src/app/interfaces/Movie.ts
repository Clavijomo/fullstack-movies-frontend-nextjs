export interface Movie {
    id: number
    name: string
    date: string
    description: string
    duration: number
    rating: number
    tags: string[]
    relatedMovies: number[],
    moviesRecommend?: Movie[]
    favorite: boolean
    module: string
    image: string
}

export type PosterMovie = Omit<Movie, 'description' | 'duration' | 'tags' | 'relatedMovies' | 'modules'>

export interface BannerMovie {
    name: string
    description: string
    image: string
    rating: number
    favorite: boolean
}