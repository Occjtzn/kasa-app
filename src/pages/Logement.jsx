import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logements from '../datas/logements.json';
import { FooterLogo } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';
import { SlideShow } from '../components/SlideShow/SlideShow';
import { LogementDetails } from '../components/LogementDetails/LogementDetails';
import { RatingAndTags } from '../components/RatingAndTags/RatingAndTags';
import { LogementDropDown } from '../components/LogementDropDown/LogementDropDown';
import './styles/logement.scss';

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
          <LogementDetails
            title={logement.title}
            location={logement.location}
            host={logement.host}
          />
          <RatingAndTags tags={logement.tags} rating={logement.rating} />
          <div className="dropdown-container">
            <LogementDropDown
              title="Description"
              content={logement.description}
            />
            <LogementDropDown
              title="Équipements"
              content={logement.equipments.join(', ')}
            />
          </div>
        </>
      )}
      <FooterLogo />
    </>
  );
};
