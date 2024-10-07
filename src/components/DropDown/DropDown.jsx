import React, { useState } from 'react';
import ArrowSvg from '../../assets/Svg/arrow_back.svg';
import './styles/drop-down.scss';

export const Dropdown = ({ items, type = 'global' }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div
      className={`${type === 'global' ? 'dropdown-global-container' : 'logement-dropdown-container'}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`${type === 'global' ? 'dropdown-section' : 'logement-dropdown'} ${openIndexes.includes(index) ? 'open' : ''}`}
        >
          <div
            className={`${type === 'global' ? 'dropdown-topbar' : 'logement-dropdown-topbar'}`}
            onClick={() => handleToggle(index)}
          >
            <span className="dropdown-title">{item.title}</span>
            <img src={ArrowSvg} alt="arrow" className="dropdown-icon" />
          </div>
          <div
            className={`${type === 'global' ? 'dropdown-frame' : 'logement-dropdown-frame'}`}
          >
            <ul>
              {item.content.split(', ').map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
