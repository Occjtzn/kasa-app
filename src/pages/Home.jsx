import HeaderImage from '../assets/Pictures/header-img.webp';
import { CardsContainer } from '../components/CardsContainer/CardsContainer';
import { Header } from '../components/Header/Header';

export const Home = () => {
  return (
    <>
      <Header
        imageHeader={HeaderImage}
        title="Chez vous, partout et ailleurs"
      />
      <CardsContainer />
    </>
  );
};
