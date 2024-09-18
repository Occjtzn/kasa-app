import { NavBar } from '../components/NavBar/NavBar';
import { FooterLogo } from '../components/Footer/Footer';
import { AboutLogo } from '../components/BackAbout/BackAbout';
import DropDown from '../components/DropDown/DropDown';

export const About = () => {
  return (
    <>
      <NavBar />
      <AboutLogo />
      <DropDown />
      <FooterLogo />
    </>
  );
};
