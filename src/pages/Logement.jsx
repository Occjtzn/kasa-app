import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logements from '../datas/logements.json';
import { SlideShow } from '../components/SlideShow/SlideShow';
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
      {logement && (
        <>
          <SlideShow images={logement.pictures} />
          <LogementDescription logement={logement} />
        </>
      )}
    </>
  );
};
