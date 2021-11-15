// libs
import React from "react";
import PropTypes from "prop-types";
// components
import TopNumber from "../../../../components/TopNumber";
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInfo from "../../../../components/SongInfoInTop3";
// others
import "./style.scss";

const SongInTop3Card = ({
  topNumber,
  numberTitle,
  image,
  songName,
  singerName,
  percent,
}) => (
  <div className="card-wrapper">
    <div className="card-wrapper-inner">
      <div className="top-number">
        <TopNumber
          topNumber={topNumber}
          numberTitle={numberTitle}
          fontSize="12px"
        />
      </div>
      <div className="thumbnail">
        <ThumbnailSong image={image} width="30px" height="31px" />
      </div>
      <div className="song-info">
        <SongInfo songName={songName} singerName={singerName} />
      </div>
      <div className="percent">
        <TopNumber topNumber="01" numberTitle={percent} fontSize="12px" />
      </div>
    </div>
  </div>
);

SongInTop3Card.propTypes = {
  image: PropTypes.string,
  topNumber: PropTypes.string,
  numberTitle: PropTypes.string,
  percent: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};

export default SongInTop3Card;
