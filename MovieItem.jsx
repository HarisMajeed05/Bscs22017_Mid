
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import '../styles/MovieItem.css'; // Make sure to import the CSS

const MovieItem = ({ movie }) => {
    const { addToFavorites, removeFromFavorites, favorites } = useContext(MovieContext);
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            removeFromFavorites(movie.imdbID);
        } else {
            addToFavorites(movie);
        }
    };

    return (
        <div className="movie-item">
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <p>Rating: {movie.imdbRating ? movie.imdbRating : 'N/A'}</p>
            <div className="button-link-container">
                <button onClick={handleFavoriteToggle}>
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
                <Link to={`/movies/${movie.imdbID}`}>View Details</Link>
            </div>
        </div>
    );
};

MovieItem.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        imdbID: PropTypes.string.isRequired,
        imdbRating: PropTypes.string, // Make optional for clarity
        Poster: PropTypes.string // Make optional for clarity
    }).isRequired
};

export default MovieItem;
