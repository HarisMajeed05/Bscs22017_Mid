import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import FavoritesPage from './pages/FavoritesPage'; // Import the FavoritesPage
import MovieProvider from './context/MovieContext';

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} /> {/* Add the route for favorites */}
        </Routes>
        <Footer />
      </Router>
    </MovieProvider>
  );
};


export default App;
