// libs
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

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
