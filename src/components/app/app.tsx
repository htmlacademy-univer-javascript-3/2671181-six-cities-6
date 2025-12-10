import MainPage from '../../pages/mainPage/mainPage';

type Props = {
  cards: Card[];
};

function App({ cards }: Props): JSX.Element {
  return (
    <MainPage cards={cards} />
  );
}

export default App;
