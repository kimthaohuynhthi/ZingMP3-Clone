// libs
import React from "react";
import PropTypes from "prop-types";
import { MinusOutlined } from "@ant-design/icons";
// components
import TopNumber from "../../../../components/TopNumber";
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInformation from "../../../../components/SongInformation";
// others
import "./style.scss";
import FunctionalIcon from "./FunctionalIcon";

const SongCard = ({ topNumber, numberTitle, image, songName, singerName }) => (
  <div className="song-card-wrapper">
    <div className="song-card-wrapper-inner">
      <div className="top-number">
        <TopNumber
          topNumber={topNumber}
          numberTitle={numberTitle}
          fontSize="20px"
        />
      </div>
      <div className="icon">
        <MinusOutlined />
      </div>
      <div className="thumbnail">
        <ThumbnailSong image={image} width="60px" height="61px" />
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
  image: PropTypes.string,
  topNumber: PropTypes.string,
  numberTitle: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default SongCard;
