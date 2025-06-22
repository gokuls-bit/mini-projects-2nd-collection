import { Link } from 'react-router-dom';
import"../css/Navbar.css"
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">AARAM SE DEKHO </Link>
        <div className="navbar-nav ms-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
