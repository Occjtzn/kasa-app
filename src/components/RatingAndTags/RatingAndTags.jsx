import React from 'react';
import FullStar from '../../assets/Svg/FullStar.svg';
import EmptyStar from '../../assets/Svg/EmptyStar.svg';
import './styles/rating_tags.scss';

export const RatingAndTags = ({ tags, rating }) => {
  const totalStars = 5;

  return (
    <div className="rating-and-tags">
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="rating">
        {[...Array(totalStars)].map((_, index) => (
          <img
            key={index}
            src={index < rating ? FullStar : EmptyStar}
            alt={index < rating ? 'Etoile pleine' : 'Etoile vide'}
          />
        ))}
      </div>
    </div>
  );
};
