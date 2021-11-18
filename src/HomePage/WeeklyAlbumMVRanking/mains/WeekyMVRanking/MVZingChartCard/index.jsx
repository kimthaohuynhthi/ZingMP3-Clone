// libs
import React from "react";
// import PropTypes from "prop-types";
// components
import SongInformation from "../../../../../components/SongInformation";
import Thumbnail from "../../../../../components/ThumbnailSong";
//image
import ig from "../../../../../assets/WeeklyMVRanking/banner.jpeg";
// others
import "./style.scss";

const MVZingChartCard = () => (
  <div className="song-in-top-card-wrapper">
    <div className="song-in-top-card-wrapper-inner">
      <Thumbnail image={ig} width="30" height="20" />
      <SongInformation className="mv-info" />
    </div>
  </div>
);

// MVZingChartCard.propTypes = {
//   songName: PropTypes.string,
//   singerName: PropTypes.string,
// };
export default MVZingChartCard;
