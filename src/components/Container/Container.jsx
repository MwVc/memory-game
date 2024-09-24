import PropTypes from "prop-types";
import Card from "./Card/Card";
import { shuffleArray } from "../../utilities";

export default function Container({ data, setData }) {
  function handleClick(value) {
    if (!value.isClicked) {
      const updatedData = data.map((item) =>
        item === value ? { ...item, isClicked: true } : item
      );
      setData(shuffleArray(updatedData));
    } else {
      console.log("This card has already been clicked. No reshuffle.");
    }
  }

  const cardList = data.map((value, index) => (
    <Card value={value} key={index} handleClick={() => handleClick(value)} />
  ));

  return <div className="container">{cardList}</div>;
}

Container.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};
