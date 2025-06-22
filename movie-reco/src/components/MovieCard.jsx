import "../css/MovieCard.css";
function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert(`You favorited: ${movie.title}`);
  }

  return (
    <div className="card h-100 shadow-sm">
      <img src={movie.url} className="card-img-top" alt={movie.title} />
      <div className="card-body text-center">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text text-muted">{movie.release_date}</p>
        <button className="btn btn-outline-danger btn-sm" onClick={onFavoriteClick}>
          ❤️ Favorite
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
