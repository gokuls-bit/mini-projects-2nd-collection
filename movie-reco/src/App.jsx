import './css/App.css'; // Your custom styles
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favrorite from './pages/Favorities';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/favorites" element={<Favrorite />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
