// libs
import React from "react";
import PropTypes from "prop-types";
// components
import TopNumber from "../../../../components/TopNumber";
import SongInformation from "../../../../components/SongInformation";
import FunctionalIcon from "../../../../components/FunctionalIcon";
// others
import "./style.scss";

const SongCard = ({ topNumber, numberTitle, songName, singerName, color }) => (
  <div className="song-in-top-card-wrapper">
    <TopNumber
      className="top-number-song-card"
      topNumber={topNumber}
      numberTitle={numberTitle}
      fontSize="20px"
    />
    <SongInformation
      className="song-info"
      songName={songName}
      singerName={singerName}
      color={color}
    />
    <div className="functional-icon">
      <FunctionalIcon />
    </div>
  </div>
);

SongCard.propTypes = {
  topNumber: PropTypes.string,
  numberTitle: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
  color: PropTypes.string,
};
export default SongCard;
