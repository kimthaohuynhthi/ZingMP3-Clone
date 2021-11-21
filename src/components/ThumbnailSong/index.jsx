// libs
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

const ThumbnailSong = ({ image, width, height, className, topNumber }) => (
  <div className={classNames("thumbnail-song-wrapper", className)}>
    <a href="#" className="thumbnail-song-wrapper-inner">
      <img src={image} style={{ width, height }} alt="thumbnail-song" />
      <div className={classNames("top-number-mv")}>{topNumber}</div>
    </a>
  </div>
);

ThumbnailSong.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  topNumber: PropTypes.string,
};

export default ThumbnailSong;
