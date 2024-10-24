import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?apikey=849c81ac&i=${id}`);
                const data = await response.json();
                if (data.Response === "True") {
                    setMovie(data);
                } else {
                    console.error("Movie not found:", data.Error);
                }
            } catch (error) {
                console.error("Error fetching movie details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!movie) {
        return <p>Movie details not available.</p>;
    }

    return (
        <div className="movie-details">
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
            <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
        </div>
    );
};

export default MovieDetails;
