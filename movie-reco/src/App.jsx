// src/App.jsx

import './css/App.css'; // ✅ Your global app styles
import Home from './pages/Home'; // ✅ Main movie page
import Favorites from './pages/Favorities'; // ✅ Correct spelling
import NavBar from './components/NavBar'; // ✅ Top navigation bar
import { MovieProvider, useMovieContext } from './context/MovieContext'; // ✅ Context
import { Routes, Route } from 'react-router-dom';

function MainContent() {
  const { theme } = useMovieContext();

  return (
    <main className={`main-content ${theme}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<div className="text-center py-4">404 - Page Not Found</div>} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <MainContent />
    </MovieProvider>
  );
}

export default App;
