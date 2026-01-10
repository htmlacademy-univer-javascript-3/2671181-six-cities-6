import NearbyOfferCard from '../nearbyOfferCard/nearbyOfferCard';
import type { Card } from '../../alltypes';

type NearbyOffersListProps = {
  cards: Card[];
};

function NearbyOffersList({ cards }: NearbyOffersListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {cards.map((card) => (
        <NearbyOfferCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default NearbyOffersList;
