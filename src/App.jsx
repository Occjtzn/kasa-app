import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Logement } from './pages/Logement';
import { NavBar } from './components/NavBar/NavBar';
import { FooterLogo } from './components/Footer/Footer';
import ErrorPage from './pages/Error';
import './style/app.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterLogo />
    </Router>
  );
}

export default App;
