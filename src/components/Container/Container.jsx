import PropTypes from "prop-types";
import Card from "./Card/Card";

export default function Container({ data, setData }) {
  const cardList = data.map((value, index) => (
    <Card value={value} key={index} data={data} setData={setData} />
  ));
  console.log(Array.isArray(cardList));
  return <div className="container">{cardList}</div>;
}

Container.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func,
};
