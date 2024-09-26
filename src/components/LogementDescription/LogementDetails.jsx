import React from 'react';

export const LogementDetails = ({ title, location, tags }) => {
  return (
    <div className="logement-details">
      <h1>{title}</h1>
      <h2>{location}</h2>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
