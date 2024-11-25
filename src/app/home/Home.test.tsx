import { fireEvent, render, screen } from '@testing-library/react';
import axios from "axios";
import { useRouter } from "next/navigation";
import Home from "../page";
import { useAuth } from '../context/AuthContext';
import { useFetchingMovies } from '../hooks/home/useFetchingMovies';

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

jest.mock("axios");

jest.mock('../hooks/home/useFetchingMovies', () => ({
    useFetchingMovies: jest.fn(),
}));

jest.mock('../context/AuthContext', () => ({
    useAuth: jest.fn()
}));

const mockMovies = [
    {
        id: 1,
        name: "Inception",
        date: "2010-07-16",
        description: "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
        duration: 148,
        rating: 8.8,
        tags: ["Sci-Fi", "Thriller", "Action"],
        relatedMovies: [2, 3],
        moviesRecommend: [],
        favorite: true,
        module: "Top Rated",
        image: "inception.jpg",
    },
    {
        id: 2,
        name: "The Matrix",
        date: "1999-03-31",
        description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
        duration: 136,
        rating: 8.7,
        tags: ["Sci-Fi", "Action"],
        relatedMovies: [1],
        moviesRecommend: [],
        favorite: false,
        module: "Popular",
        image: "matrix.jpg",
    },
];

describe('Home Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        (axios.get as jest.Mock).mockResolvedValue({
            status: 200,
            statusText: 'OK',
            data: mockMovies,
        });

        (useRouter as jest.Mock).mockReturnValue({
            push: jest.fn(),
            prefetch: jest.fn(),
        });

        (useAuth as jest.Mock).mockReturnValue({
            showModal: false,
            closeModal: jest.fn()
        });

        (useFetchingMovies as jest.Mock).mockReturnValue({
            listMovies: mockMovies,
            randomMovie: mockMovies[0]
        })
    });

    it('Renders movies based on fetched data and selected category', async () => {
        render(<Home />);

        await screen.findByText('Inception');
        await screen.findByText('The Matrix');

        fireEvent.click(screen.getByText('Top Rated'));

        expect(screen.getByText('Inception')).toBeInTheDocument();
        expect(screen.queryByText('The Matrix')).not.toBeInTheDocument();
    });
});
