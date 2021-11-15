// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const SongInfo = ({ songName, singerName }) => (
  <div className="song-info-wrapper">
    <div className="song-info-wrapper-inner">
      <h3 className="song-name">
        <a href="/">{songName}</a>
      </h3>
      <div className="singer-name">
        <a href="/">{singerName}</a>
      </div>
    </div>
  </div>
);
SongInfo.propTypes = {
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default SongInfo;
