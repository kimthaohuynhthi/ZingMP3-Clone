// libs
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

const ImageCard = ({ image, name, width, height, className }) => (
  <div className={classNames("image-card-wrapper", className)}>
    <a href="/" className="image-card-wrapper-inner">
      <img src={image} style={{ width, height }} alt="hot-artist" />
      <span className="artist-name">{name}</span>
    </a>
  </div>
);

ImageCard.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};
export default ImageCard;
