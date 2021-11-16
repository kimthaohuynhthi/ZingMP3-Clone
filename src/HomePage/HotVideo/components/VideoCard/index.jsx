// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInformation from "../../../../components/SongInformation";
// others
import "./style.scss";

const VideoCard = ({ image, songName, singerName }) => (
  <div className="video-card-wrapper">
    <ThumbnailSong image={image} width="140px" height="auto" />
    <SongInformation songName={songName} singerName={singerName} />
  </div>
);
VideoCard.propTypes = {
  image: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default VideoCard;
