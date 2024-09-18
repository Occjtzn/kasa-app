import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './style/app.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        <Route path="/About" element={<About />} />{' '}
      </Routes>
    </Router>
  );
}

export default App;
