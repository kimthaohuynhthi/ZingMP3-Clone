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
  <div className="song-card-wrapper">
    <div className="song-card-wrapper-inner">
      <div className="top-number">
        <TopNumber
          topNumber={topNumber}
          numberTitle={numberTitle}
          fontSize="20px"
        />
      </div>
      <div className="song-info">
        <SongInformation songName={songName} singerName={singerName} />
      </div>
      <div className="functional-icon">
        <FunctionalIcon />
      </div>
    </div>
  </div>
);

SongCard.propTypes = {
  topNumber: PropTypes.string,
  numberTitle: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default SongCard;
