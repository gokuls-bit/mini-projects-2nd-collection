import { Link } from 'react-router-dom';
import "../css/Navbar.css";
import { useMovieContext } from "../context/MovieContext";

function NavBar() {
  const { theme, toggleTheme } = useMovieContext();

  return (
    <nav className={`navbar navbar-expand-lg px-3 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand fw-bold">🎬 AARAM SE DEKHO</Link>

        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>

          <button
            className="theme-toggle-btn btn btn-sm"
            onClick={toggleTheme}
            title="Toggle Theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
