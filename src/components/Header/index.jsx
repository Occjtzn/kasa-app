import { Link, useLocation } from 'react-router-dom';
import KasaLogo from '../../assets/kasa-logo.webp';
import './Header.scss';

function Header() {
  const location = useLocation(); // Permet de savoir sur quelle page on est pour gérer le style "active"

  return (
    <header className="header">
      <Link to="/">
        <img src={KasaLogo} alt="Kasa Logo" className="header-logo" />
      </Link>
      <nav className="header-nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Accueil
        </Link>
        <Link
          to="/propos"
          className={location.pathname === '/propos' ? 'active' : ''}
        >
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
