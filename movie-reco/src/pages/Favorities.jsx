// src/pages/Favorite.js
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";

function Favorite() {
  const { favorites, theme } = useMovieContext();

  return (
    <div className={`favorites container py-4 ${theme}`}>
      {favorites.length === 0 ? (
        <div className="text-center">
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding your favorite movies to see them here!</p>
        </div>
      ) : (
        <>
          <h2 className="text-center text-warning mb-4">❤️ Your Favorites</h2>
          <div className="row g-4">
            {favorites.map((movie) => (
              <div className="col-md-3" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favorite;
