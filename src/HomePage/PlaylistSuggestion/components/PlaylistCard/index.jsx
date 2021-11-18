// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInformation from "../../../../components/SongInformation";
// others
import "./style.scss";

const PlaylistCard = ({ image, songName, singerName }) => (
  <div className="playlist-card-wrapper">
    <ThumbnailSong image={image} width="140px" height="140px" />
    <SongInformation
      className="playlist-info"
      songName={songName}
      singerName={singerName}
    />
  </div>
);
PlaylistCard.propTypes = {
  image: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default PlaylistCard;
