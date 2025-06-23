import React from 'react';
import { useMovieContext } from '../context/MovieContext';

const MovieCard = ({ movie }) => {
    const { addToFavorites, removeFromFavorites, isFavorite, theme } = useMovieContext();
    const favorite = isFavorite(movie.id);

    const handleFavoriteClick = () => {
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    };

    return (
        <div className={`movie-card ${theme}`}>
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-button" onClick={handleFavoriteClick}>
                        {favorite ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h4>{movie.title}</h4>
            </div>
        </div>
    );
};

export default MovieCard;
