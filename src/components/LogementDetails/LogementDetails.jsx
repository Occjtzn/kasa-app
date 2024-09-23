import React from 'react';
import './styles/logement_details.scss';

export const LogementDetails = ({ title, location, host }) => {
  return (
    <div className="details-container">
      <div className="logement-details">
        <h1>{title}</h1>
        <h2>{location}</h2>
      </div>
      <div className="host-info">
        <span className="host-name">{host.name}</span>
        <img src={host.picture} alt={`${host.name}`} className="host-picture" />
      </div>
    </div>
  );
};
