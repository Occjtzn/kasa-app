import HeaderImage from '../../assets/header-img.webp';
import './styles/header.scss';

export const HeaderLogo = () => {
  return (
    <div className="header-container">
      <img className="header-img" src={HeaderImage} alt="Header-Logo" />
      <h2 className="header-title">Chez vous, partout et ailleurs</h2>
    </div>
  );
};
