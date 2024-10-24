import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieItem from '../components/MovieItem';

const FavoritesPage = () => {
    const { favorites } = useContext(MovieContext);

    return (
        <div className="favorites-page">
            <h2>Your Favorite Movies</h2>
            {favorites.length === 0 ? (
                <p>No favorite movies found.</p>
            ) : (
                <div className="movie-list">
                    {favorites.map((movie) => (
                        <MovieItem key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;
