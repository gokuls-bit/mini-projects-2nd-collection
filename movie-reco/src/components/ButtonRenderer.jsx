// src/components/ButtonRenderer.jsx
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/api';
import './ButtonRenderer.css';

const MovieButtonList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getPopularMovies();
      setMovies(data);
    };
    load();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '1rem' }}>
      {movies.map((movie) => (
        <a
          key={movie.id}
          href={movie.website_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '8px 16px',
            backgroundColor: '#e50914',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          {movie.title}
        </a>
      ))}
    </div>
  );
};

export default MovieButtonList;
