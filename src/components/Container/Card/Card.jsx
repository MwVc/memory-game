import PropTypes from "prop-types";

export default function Card({ value }) {
  return (
    <div className="card">
      <h1>{value}</h1>
    </div>
  );
}

Card.propTypes = {
  value: PropTypes.number,
};
