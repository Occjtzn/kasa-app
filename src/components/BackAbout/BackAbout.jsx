import AboutImage from '../../assets/Pictures/back-about-img.webp';
import './styles/back_about.scss';

export const AboutLogo = () => {
  return (
    <div className="about-container">
      <img className="about-img" src={AboutImage} alt="About-img" />
    </div>
  );
};
