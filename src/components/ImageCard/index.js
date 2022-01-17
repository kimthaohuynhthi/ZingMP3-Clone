// libs
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

/**
 * @module ImageCard
 * @param {Object} props - Properties
 * @param {string} props.image - Image
 * @param {string} props.width - width of image
 * @param {string} props.height - height of image
 * @param {string} props.name - singer name
 * @param {string} props.className - className
 * @return {React.ReactElement}
 */

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
