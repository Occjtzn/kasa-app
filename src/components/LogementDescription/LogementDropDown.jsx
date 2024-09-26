import React, { useState } from 'react';
import ArrowSvg from '../../assets/Svg/arrow_back.svg';

export const LogementDropDown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`logement-dropdown ${isOpen ? 'open' : ''}`}>
      <div className="logement-dropdown-topbar" onClick={handleToggle}>
        <span className="logement-dropdown-title">{title}</span>
        <img src={ArrowSvg} alt="arrow" className="logement-dropdown-icon" />
      </div>
      <div className={`logement-dropdown-frame ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};
