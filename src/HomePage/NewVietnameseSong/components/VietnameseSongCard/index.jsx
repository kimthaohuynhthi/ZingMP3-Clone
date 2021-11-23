// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInformation from "../../../../components/SongInformation";
// others
import "./style.scss";
import FunctionalIcon from "../../../../components/FunctionalIcon";

const VietNameseSongCard = ({ image, songName, singerName }) => (
  <div className="song-card-wrapper">
    <div className="song-card-wrapper-inner">
      <ThumbnailSong
        className="thumbnail-new-song"
        image={image}
        width="50px"
        isShowIcon="true"
      />
      <SongInformation
        className="song-info-new-song"
        songName={songName}
        singerName={singerName}
      />
      <div className="functional-icon-new-song">
        <FunctionalIcon />
      </div>
    </div>
  </div>
);

VietNameseSongCard.propTypes = {
  image: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default VietNameseSongCard;
