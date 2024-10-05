import React, { useState } from 'react';
import ArrowSvg from '../../assets/Svg/arrow_back.svg';
import './styles/drop-down.scss';

export const Dropdown = ({ items, type = 'global' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`${type === 'global' ? 'dropdown-global-container' : 'logement-dropdown-container'}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`${type === 'global' ? 'dropdown-section' : 'logement-dropdown'} ${openIndex === index ? 'open' : ''}`}
        >
          <div
            className={`${type === 'global' ? 'dropdown-topbar' : 'logement-dropdown-topbar'}`}
            onClick={() => handleToggle(index)}
          >
            <span className="dropdown-title">{item.title}</span>
            <img src={ArrowSvg} alt="arrow" className="dropdown-icon" />
          </div>
          {openIndex === index && (
            <div
              className={`${type === 'global' ? 'dropdown-frame' : 'logement-dropdown-frame'}`}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
