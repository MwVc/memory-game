import PropTypes from "prop-types";
import Card from "./Card/Card";

export default function Container(props) {
  console.log(props.data[11]);
  return (
    <div className="container">
      {props.data.map((value, index) => (
        <Card value={value} key={index} />
      ))}
    </div>
  );
}

Container.propTypes = {
  data: PropTypes.array,
};
