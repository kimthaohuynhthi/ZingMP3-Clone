// libs
import React from "react";
import PropTypes from "prop-types";
// components
import TopNumber from "../../../../components/TopNumber";
import SongInformation from "../../../../components/SongInformation";
import FunctionalIcon from "../../../../components/FunctionalIcon";
// others
import "./style.scss";

const SongCard = ({ topNumber, numberTitle, songName, singerName }) => (
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
    />
    <FunctionalIcon className="functional-icon" />
  </div>
);

SongCard.propTypes = {
  topNumber: PropTypes.string,
  numberTitle: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default SongCard;
