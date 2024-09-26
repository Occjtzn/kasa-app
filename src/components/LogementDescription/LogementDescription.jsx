import { LogementDetails } from './LogementDetails';
import { LogementDropDown } from './LogementDropDown';
import { RatingHost } from './RatingHost';
import './styles/logement_description.scss';

export const LogementDescription = ({ logement }) => {
  return (
    <>
      <div className="logement-container">
        <LogementDetails
          title={logement.title}
          location={logement.location}
          tags={logement.tags}
        />
        <RatingHost rating={logement.rating} host={logement.host} />
      </div>
      <div className="dropdown-container">
        <LogementDropDown title="Description" content={logement.description} />
        <LogementDropDown
          title="Équipements"
          content={logement.equipments.join(', ')}
        />
      </div>
    </>
  );
};
