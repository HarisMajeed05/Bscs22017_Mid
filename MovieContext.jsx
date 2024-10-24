import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export const MovieContext = createContext();


const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const searchMovies = async (query) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=849c81ac&s=${query}`);
        const data = await response.json();
        setMovies(data.Search || []);
    };

    const addToFavorites = (movie) => {
        setFavorites((prevFavorites) => [...prevFavorites, movie]);
    };

    const removeFromFavorites = (id) => {
        setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.imdbID !== id));
    };

    return (
        <MovieContext.Provider value={{ movies, searchMovies, favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </MovieContext.Provider>
    );
};


// Add propTypes validation for 'children'
MovieProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default MovieProvider;
