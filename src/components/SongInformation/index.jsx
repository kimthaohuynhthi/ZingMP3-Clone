// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const SongInformation = ({ songName, singerName }) => (
  <div className="song-information-wrapper">
    <div className="song-information-wrapper-inner">
      <h3 className="song-name">
        <a href="/">{songName}</a>
      </h3>
      <div className="singer-name">
        <a href="/">{singerName}</a>
      </div>
    </div>
  </div>
);
SongInformation.propTypes = {
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default SongInformation;
