import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logements from '../datas/logements.json';
import { FooterLogo } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';
import { SlideShow } from '../components/SlideShow/SlideShow';
import './styles/logement.scss';
import { LogementDescription } from '../components/LogementDescription/LogementDescription';

export const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = Logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/error');
    }
  }, [logement, navigate]);

  return (
    <>
      <NavBar />
      {logement && (
        <>
          <SlideShow images={logement.pictures} />
          <LogementDescription logement={logement} />
        </>
      )}
      <FooterLogo />
    </>
  );
};
