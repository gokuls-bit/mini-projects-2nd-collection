import MovieCard from '../components/MovieCard';
import { useState } from 'react';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
  const movies = [
    {
      id: 1,
      title: "The Avengers",
      release_date: "2012-04-25",
      url: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
    },
    {
      id: 2,
      title: "Avengers: Age of Ultron",
      release_date: "2015-04-22",
      url: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
    },
    {
      id: 3,
      title: "Avengers: Infinity War",
      release_date: "2018-04-25",
      url: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      release_date: "2019-04-24",
      url: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
      id: 5,
      title: "Iron Man",
      release_date: "2008-04-30",
      url: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
    },
    {
      id: 6,
      title: "Iron Man 2",
      release_date: "2010-04-28",
      url: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg"
    },
    {
      id: 7,
      title: "Iron Man 3",
      release_date: "2013-04-18",
      url: "https://image.tmdb.org/t/p/w500/1Ilv6ryHUv6rt9zIsbSEJUmmbEi.jpg"
    },
    {
      id: 8,
      title: "Captain America: The First Avenger",
      release_date: "2011-07-22",
      url: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg"
    },
    {
      id: 9,
      title: "Captain America: The Winter Soldier",
      release_date: "2014-03-20",
      url: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg"
    },
    {
      id: 10,
      title: "Captain America: Civil War",
      release_date: "2016-04-27",
      url: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg"
    },
    {
      id: 11,
      title: "Thor",
      release_date: "2011-04-21",
      url: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg"
    },
    {
      id: 12,
      title: "Thor: Ragnarok",
      release_date: "2017-10-25",
      url: "https://image.tmdb.org/t/p/w500/rv1AWImgx386ULjcf62VYaW8zSt.jpg"
    }
  ];
const handleSearch = ()=> {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery("------")
}
  return (
    <div className="Home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text"
             placeholder="Search for a movie..."
              className="search-input" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">Search</button>
        </form>
      <div className="container py-4">
        <h1 className="text-center text-danger mb-4">🔥 Top 12 Avengers Movies</h1>
        <div className="row">
          {movies.map((movie) => (
             movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (<MovieCard movie={movie} key={movie.id} />)
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
