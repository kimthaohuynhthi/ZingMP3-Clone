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
    <div className="info">
      <SongInformation songName={songName} singerName={singerName} />
    </div>
  </div>
);
AlbumCard.propTypes = {
  image: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default AlbumCard;
