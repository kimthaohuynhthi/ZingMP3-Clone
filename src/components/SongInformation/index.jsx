// libs
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

const SongInformation = ({ songName, singerName, className, color }) => (
  <div className={classNames("song-information-wrapper", className)}>
    <div className="song-information-wrapper-inner">
      <h3 className="song-name">
        <a href="#" style={{ color }}>
          {songName}
        </a>
      </h3>
      <div className="singer-name">
        <a href="#" style={{ color }}>
          {singerName}
        </a>
      </div>
    </div>
  </div>
);
SongInformation.propTypes = {
  songName: PropTypes.string,
  singerName: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};
export default SongInformation;
