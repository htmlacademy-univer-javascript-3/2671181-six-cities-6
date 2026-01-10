import OfferCard from '../card/card';
import type { Card } from '../../alltypes';

type Props = {
  cards: Card[];
  setActiveCard: (card: Card | null) => void;
};

function OffersList({ cards, setActiveCard }: Props): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <OfferCard
          card={card}
          setActiveCard={setActiveCard}
          key={card.id}
        />
      ))}
    </div>
  );
}

export default OffersList;
