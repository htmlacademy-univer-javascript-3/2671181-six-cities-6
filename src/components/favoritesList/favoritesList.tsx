
import FavoritesCard from '../favoritesCard/favoritesCard';
import type { FavoriteCard } from '../../alltypes';

type Props = {
  favorites: FavoriteCard[];
};

function FavoritesList({ favorites }: Props): JSX.Element {
  const favoritesByCity = favorites.reduce((acc, card) => {
    if (!acc[card.city]) {
      acc[card.city] = [];
    }
    acc[card.city].push(card);
    return acc;
  }, {} as Record<string, FavoriteCard[]>);

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesByCity).map(([city, cityFavorites]) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {cityFavorites.map((card) => (
              <FavoritesCard key={card.id} offer={card} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
