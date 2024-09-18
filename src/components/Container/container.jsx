import PropTypes, { func } from "prop-types";
import Card from "./Card/Card";

export default function Container(props) {
  const cardList = props.data.map((value, index) => (
    <Card value={value} key={index} />
  ));
  console.log(Array.isArray(cardList));
  return <div className="container">{cardList}</div>;
}

Container.propTypes = {
  data: PropTypes.array,
};

function shuffleCards(cards) {
  let shuffledCards = cards
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffledCards;
}
