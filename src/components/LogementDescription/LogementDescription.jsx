import { LogementDetails } from './LogementDetails';
import { Dropdown } from '../DropDown/DropDown';
import { RatingHost } from './RatingHost';
import './styles/logement_description.scss';

export const LogementDescription = ({ logement }) => {
  const dropdownItems = [
    {
      title: 'Description',
      content: logement.description,
    },
    {
      title: 'Équipements',
      content: logement.equipments.join(', '),
    },
  ];

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
        <Dropdown items={dropdownItems} type="logement" />
      </div>
    </>
  );
};
