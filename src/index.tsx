import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cards: Card[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    image: 'img/apartment-01.jpg',
    ratingWidth: 80,
    isPremium: true,
    isBookmarked: false,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    image: 'img/room.jpg',
    ratingWidth: 80,
    isPremium: false,
    isBookmarked: true,
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    image: 'img/apartment-02.jpg',
    ratingWidth: 80,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    image: 'img/apartment-03.jpg',
    ratingWidth: 100,
    isPremium: true,
    isBookmarked: false,
  },
  {
    id: '5',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    image: 'img/room.jpg',
    ratingWidth: 80,
    isPremium: false,
    isBookmarked: true,
  },
];

root.render(
  <React.StrictMode>
    <App cards={cards} />
  </React.StrictMode>
);
