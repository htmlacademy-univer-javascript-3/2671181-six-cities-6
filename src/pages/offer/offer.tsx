import { Link, useParams } from 'react-router-dom';
import { Cards } from '../../mocks/offers';
import Header from '../../components/header/header';
import ReviewForm from '../../components/reviewForm/reviewForm';
import ReviewsList from '../../components/reviewsList/reviewsList';
import Map from '../../components/map/map';
import NearbyOffersList from '../../components/nearbyOffersList/nearbyOffersList';

type cardPageProps = {
  isAuthorized?: boolean;
};

function CardPage({ isAuthorized = true }: cardPageProps): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const card = Cards.find((o) => o.id === id);

  if (!card) {
    return (
      <div className="page">
        <h1>Предложение не найдено</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );
  }
  const nearbyOffers = Cards.filter((o) => o.id !== id).slice(0, 3);

  return (
    <div className="page">
      <Header isAuthorized={isAuthorized} favoritesCount={3} />

      <main className="page__main page__main--card">
        <section className="card">
          <div className="card__gallery-container container">
            <div className="card__gallery">
              <div className="card__image-wrapper">
                <img
                  className="card__image"
                  src={card.image}
                  alt="Photo studio"
                />
              </div>
              <div className="card__image-wrapper">
                <img
                  className="card__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="card__image-wrapper">
                <img
                  className="card__image"
                  src="img/apartment-02.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="card__image-wrapper">
                <img
                  className="card__image"
                  src="img/apartment-03.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="card__image-wrapper">
                <img
                  className="card__image"
                  src="img/studio-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="card__image-wrapper">
                <img
                  className="card__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="card__container container">
            <div className="card__wrapper">
              {card.isPremium && (
                <div className="card__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="card__name-wrapper">
                <h1 className="card__name">{card.title}</h1>
                <button className="card__bookmark-button button" type="button">
                  <svg className="card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="card__rating rating">
                <div className="card__stars rating__stars">
                  <span style={{ width: `${card.ratingWidth}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="card__rating-value rating__value">
                  {(card.ratingWidth / 20).toFixed(1)}
                </span>
              </div>
              <ul className="card__features">
                <li className="card__feature card__feature--entire">
                  {card.type}
                </li>
                <li className="card__feature card__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="card__feature card__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="card__price">
                <b className="card__price-value">&euro;{card.price}</b>
                <span className="card__price-text">&nbsp;night</span>
              </div>
              <div className="card__inside">
                <h2 className="card__inside-title">What&apos;s inside</h2>
                <ul className="card__inside-list">
                  <li className="card__inside-item">Wi-Fi</li>
                  <li className="card__inside-item">Washing machine</li>
                  <li className="card__inside-item">Towels</li>
                  <li className="card__inside-item">Heating</li>
                  <li className="card__inside-item">Coffee machine</li>
                  <li className="card__inside-item">Baby seat</li>
                  <li className="card__inside-item">Kitchen</li>
                  <li className="card__inside-item">Dishwasher</li>
                  <li className="card__inside-item">Cabel TV</li>
                  <li className="card__inside-item">Fridge</li>
                </ul>
              </div>
              <div className="card__host">
                <h2 className="card__host-title">Meet the host</h2>
                <div className="card__host-user user">
                  <div className="card__avatar-wrapper card__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="card__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="card__user-name">Angelina</span>
                  <span className="card__user-status">Pro</span>
                </div>
                <div className="card__description">
                  <p className="card__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className="card__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="card__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">1</span>
                </h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src="img/avatar-max.jpg"
                          width="54"
                          height="54"
                          alt="Reviews avatar"
                        />
                      </div>
                      <span className="reviews__user-name">Max</span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{ width: '80%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river
                        by the unique lightness of Amsterdam. The building is
                        green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">
                        April 2019
                      </time>
                    </div>
                  </li>
                </ul>
                <ReviewsList reviews={card.reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              cards={nearbyOffers}
              center={[card.latitude, card.longitude]}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <h2 className="near-places__title">
                Other places in the neighbourhood
            </h2>
            <NearbyOffersList cards={nearbyOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default CardPage;
