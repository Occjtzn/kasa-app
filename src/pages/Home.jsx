import { NavBar } from '../components/NavBar/NavBar';
import { CardsContainer } from '../components/CardsContainer/CardsContainer';
import { HeaderLogo } from '../components/Header/Header';

export const Home = () => {
  return (
    <>
      <NavBar />
      <HeaderLogo />
      <CardsContainer />
    </>
  );
};
