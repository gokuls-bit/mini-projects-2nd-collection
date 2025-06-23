// src/pages/Home.js

import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";
import { useMovieContext } from '../context/MovieContext';

function Home() {
  const { theme, toggleTheme } = useMovieContext(); // Access theme context
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;
    setLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Search failed...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`Home container py-4 ${theme}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <form onSubmit={handleSearch} className="search-form d-flex flex-grow-1 me-3">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="form-control me-2 search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-danger search-button">Search</button>
        </form>
        <button className="btn btn-outline-secondary" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <div className="text-center text-muted">Loading...</div>
      ) : (
        <>
          <h1 className="text-center text-danger mb-4">🔥 Top Movies</h1>
          <div className="row g-4">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div className="col-md-3" key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              ))
            ) : (
              <div className="text-center">No movies found.</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
