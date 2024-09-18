import React, { useState } from 'react';
import ArrowSvg from '../../assets/arrow_back.svg'; // Assure-toi que le chemin est correct
import './styles/drop-down.scss';

const DropDown = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const menus = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
    },
    {
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="dropdown-global-container">
      {menus.map((menu, index) => (
        <div key={index} className="dropdown-section">
          <div className="dropdown-topbar" onClick={() => handleToggle(index)}>
            <span className="dropdown-title">{menu.title}</span>
            <img src={ArrowSvg} alt="arrow" className="dropdown-icon" />
          </div>
          {openIndex === index && (
            <div className="dropdown-frame">{menu.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
