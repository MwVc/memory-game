import PropTypes from "prop-types";

export default function Card({ value, handleClick }) {
  return (
    <div
      className="card"
      onClick={handleClick}
      style={{
        backgroundColor: value.isClicked ? "red" : "white",
        border: "1px red solid",
        borderRadius: "5px",
      }}
    >
      <h1>{value.value}</h1>
    </div>
  );
}

Card.propTypes = {
  value: PropTypes.shape({
    value: PropTypes.any.isRequired,
    isClicked: PropTypes.bool.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
