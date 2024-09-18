import FooterImage from '../../assets/kasa-footer-logo.webp';
import './styles/footer.scss';

export const FooterLogo = () => {
  return (
    <div className="footer-container">
      <img className="footer-img" src={FooterImage} alt="Footer-Logo" />
      <h2 className="footer-title">© 2020 Kasa. All rights reserved</h2>
    </div>
  );
};
