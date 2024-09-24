import PropTypes from "prop-types";
import "./Card.css";

export default function Card({ gifData, handleClick }) {
  return (
    <div className="card" onClick={handleClick}>
      <img src={gifData.images.original.url} alt={gifData.title} />
    </div>
  );
}

Card.propTypes = {
  gifData: PropTypes.shape({
    images: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    isClicked: PropTypes.bool.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
