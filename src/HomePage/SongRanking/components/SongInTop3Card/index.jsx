// libs
import React from "react";
import PropTypes from "prop-types";
// components
import TopNumber from "../../../../components/TopNumber";
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInfoTop3 from "../../../../components/SongInfoInTop3";
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
      <TopNumber
        className="top-number"
        topNumber={topNumber}
        numberTitle={numberTitle}
        fontSize="12px"
      />
      <ThumbnailSong
        className="thumbnail-song"
        image={image}
        width="30px"
        height="31px"
      />
      <SongInfoTop3
        className="song-info"
        songName={songName}
        singerName={singerName}
      />
      <TopNumber
        className="percent"
        topNumber={topNumber}
        numberTitle={percent}
        fontSize="12px"
      />
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
