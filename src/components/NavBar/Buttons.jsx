import './styles/navbar.scss';
import { useEffect } from 'react';

export const Buttons = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('button');

    function handleToggleClass(e) {
      buttons.forEach((button) => {
        button.classList.remove('active');
      });

      e.target.classList.add('active');
    }

    buttons.forEach((button) => {
      button.addEventListener('click', handleToggleClass);
    });
  });

  return (
    <div className="btn-container">
      <button className="btn-accueil">Accueil</button>
      <button className="btn-about">A propos</button>
    </div>
  );
};
