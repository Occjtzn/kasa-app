import KasaLogo from '../../assets/kasa-logo.webp';

export const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo-img" src={KasaLogo} alt="Logo" />
    </div>
  );
};
