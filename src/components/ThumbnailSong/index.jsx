// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const ThumbnailSong = ({ image, width, height }) => (
  <div className="thumbnail-song-wrapper">
    <a href="/" className="thumbnail-song-wrapper-inner">
      <img src={image} style={{ width, height }} alt="thumbnail-song" />
    </a>
  </div>
);

ThumbnailSong.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ThumbnailSong;
