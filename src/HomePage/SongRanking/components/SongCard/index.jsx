// libs
import React from "react";
import PropTypes from "prop-types";
import { MinusOutlined } from "@ant-design/icons";
// components
import TopNumber from "../../../../components/TopNumber";
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInformation from "../../../../components/SongInformation";
import FunctionalIcon from "../../../../components/FunctionalIcon";
// others
import "./style.scss";

const SongCard = ({ topNumber, numberTitle, image, songName, singerName }) => (
  <div className="song-card-wrapper">
    <div className="song-card-wrapper-inner">
      <TopNumber
        topNumber={topNumber}
        numberTitle={numberTitle}
        fontSize="20px"
        className="top-number"
      />
      <div className="minus-icon">
        <MinusOutlined />
      </div>
      <ThumbnailSong
        className="thumbnail"
        image={image}
        width="60px"
        height="61px"
      />
      <SongInformation
        className="song-info"
        songName={songName}
        singerName={singerName}
      />
      <FunctionalIcon className="functional-icon-song-ranking" />
    </div>
  </div>
);

SongCard.propTypes = {
  image: PropTypes.string,
  topNumber: PropTypes.string,
  numberTitle: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default SongCard;
