import { NavLink } from 'react-router-dom';
import './styles/navbar.scss';
import { useEffect } from 'react';

export const NavLinks = () => {
  useEffect(() => {
    const NavLinks = document.querySelectorAll('NavLink');

    function handleToggleClass(e) {
      NavLinks.forEach((NavLink) => {
        NavLink.classList.remove('active');
      });

      e.target.classList.add('active');
    }

    NavLinks.forEach((NavLink) => {
      NavLink.addEventListener('click', handleToggleClass);
    });
  });

  return (
    <div className="nav-container">
      <NavLink className="nav-accueil" to="/">
        Accueil
      </NavLink>
      <NavLink className="nav-about" to="/About">
        A propos
      </NavLink>
    </div>
  );
};
