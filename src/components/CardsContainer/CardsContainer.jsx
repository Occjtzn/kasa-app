import Logements from '../../datas/logements.json';
import { useEffect, useState } from 'react';
import './styles/card_container.scss';

export function CardsContainer() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(Logements);
  }, []);

  return (
    <div className="cards-container">
      <div className="cards">
        {cards.map((card) => {
          return (
            <div key={cards.id}>
              <img src={card.cover} alt={cards.title} />
              <h2 className="card-title">{card.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
