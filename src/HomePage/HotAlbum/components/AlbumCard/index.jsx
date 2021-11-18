// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInformation from "../../../../components/SongInformation";
// others
import "./style.scss";

const AlbumCard = ({ image, songName, singerName }) => (
  <div className="album-card-wrapper">
    <ThumbnailSong image={image} width="140px" height="140px" />
    <SongInformation
      className="song-information"
      songName={songName}
      singerName={singerName}
    />
  </div>
);
AlbumCard.propTypes = {
  image: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default AlbumCard;
