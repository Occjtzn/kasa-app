import React from 'react';
import FullStar from '../../assets/Svg/FullStar.svg';
import EmptyStar from '../../assets/Svg/EmptyStar.svg';

export const RatingHost = ({ host, rating }) => {
  const totalStars = 5;

  return (
    <div className="rating">
      {host && (
        <div className="host-info">
          <span className="host-name">{host.name}</span>
          <img src={host.picture} alt={host.name} className="host-picture" />
        </div>
      )}
      <div className="stars">
        {[...Array(totalStars)].map((_, index) => (
          <img
            key={index}
            src={index < rating ? FullStar : EmptyStar}
            alt={index < rating ? 'Etoile pleine' : 'Etoile vide'}
            className="star-picture"
          />
        ))}
      </div>
    </div>
  );
};
