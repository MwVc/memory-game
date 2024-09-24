import PropTypes from "prop-types";
import Card from "./Card/Card";
import { shuffleArray } from "../../utilities";

export default function Container({
  data,
  setData,
  score,
  setScore,
  highScore,
  setHighScore,
}) {
  console.log(score);

  function handleClick(value) {
    if (!value.isClicked) {
      const updatedData = data.map((item) =>
        item === value ? { ...item, isClicked: true } : item
      );
      setData(shuffleArray(updatedData));
      setScore((prevScore) => prevScore + 1);
    } else {
      console.log("This card has already been clicked. No reshuffle.");
      const updatedData = data.map((item) => ({ ...item, isClicked: false }));
      setData(updatedData);
      setScore(0);
      score > highScore && setHighScore(score);
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
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  highScore: PropTypes.number.isRequired,
  setHighScore: PropTypes.func.isRequired,
};
