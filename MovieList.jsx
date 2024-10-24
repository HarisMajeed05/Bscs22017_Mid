import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            releaseDate: PropTypes.string.isRequired,
            rating: PropTypes.string.isRequired
        })
    ).isRequired,
};

export default MovieList;
