import { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { MovieContext } from '../context/MovieContext';

const Home = () => {
    const { movies, searchMovies } = useContext(MovieContext);

    return (
        <div>
            <SearchBar onSearch={searchMovies} />
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
