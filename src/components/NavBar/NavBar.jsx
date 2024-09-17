import { Logo } from './Logo';
import { Buttons } from './Buttons';
import './styles/navbar.scss';

export const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Logo />
        <Buttons />
      </div>
    </>
  );
};
