// libs
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

/**
 * @module SongInfoTop3 - return info of music in top 3
 * @param {Object} props - Properties
 * @param {string} props.songName - song name
 * @param {string} props.singerName - singer name
 * @param {string} props.className - className
 * @return {React.ReactElement}
 */

const SongInfoTop3 = ({ songName, singerName, className }) => (
  <div className={classNames("song-info-wrapper", className)}>
    <div className="song-info-wrapper-inner">
      <h3 className="song-name">
        <a href="#">{songName}</a>
      </h3>
      <div className="singer-name">
        <a href="#">{singerName}</a>
      </div>
    </div>
  </div>
);
SongInfoTop3.propTypes = {
  songName: PropTypes.string,
  singerName: PropTypes.string,
  className: PropTypes.string,
};
export default SongInfoTop3;
