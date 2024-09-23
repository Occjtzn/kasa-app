import { Link } from 'react-router-dom';
import Logements from '../../datas/logements.json';
import { useEffect, useState } from 'react';
import './styles/card_container.scss';

export function CardsContainer() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(Logements);
  }, []);

  return (
    <div className="card-container">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <Link to={`/logement/${card.id}`}>
            <img className="card-img" src={card.cover} alt={card.title} />
            <h2 className="card-title">{card.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
