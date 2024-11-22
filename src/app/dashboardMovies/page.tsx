'use client'

import { useState } from 'react';
import { SideMenu } from '../components/shared/SideMenu';
import { useFetchingMovies } from '../hooks/dashboardMovies/useFetchingMovies';
import '../styles/home.css';
import { CardMovie } from './_CardMovie';
import { Banner } from './_Banner';

function DashBoardMovies() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const modules = ['Top Rated', 'Now Playing', 'Popular', 'Upcoming'];

    const { listMovies, randomMovie } = useFetchingMovies();

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    }

    const filteredMovies =
        selectedCategory === 'All'
            ? listMovies
            : listMovies.filter((movie) => movie.module === selectedCategory)

    return (
        <>
            {randomMovie && <Banner bannerMovie={randomMovie} />}
            <div className='dashboard-container'>
                <SideMenu
                    handleCategoryClick={handleCategoryClick}
                    modules={modules}
                    selectedCategory={selectedCategory}
                />
                <main className="movies-content">
                    {modules.map((module) =>
                        (selectedCategory === 'All' || selectedCategory === module) && (
                            <div key={module}>
                                <h2 className="text-module">{module}</h2>
                                <div className="container-movies">
                                    {filteredMovies
                                        .filter((movie) => movie.module === module)
                                        .map((movie, i) => (
                                            <CardMovie {...movie} key={i} />
                                        ))}
                                </div>
                            </div>
                        )
                    )}
                </main>
            </div>
        </>
    )
}

export default DashBoardMovies