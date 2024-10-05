import React from 'react';
import './styles/header.scss';

export const Header = ({ imageHeader, title }) => {
  return (
    <div className="header-container">
      <img className="header-img" src={imageHeader} alt="Header" />
      {title && <h2 className="header-title">{title}</h2>}
    </div>
  );
};
