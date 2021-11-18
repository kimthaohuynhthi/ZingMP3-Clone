// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ThumbnailSong from "../../../../../components/ThumbnailSong";
import SongInformation from "../../../../../components/SongInformation";
// others
import "./style.scss";

const MVZingChartCard = ({ songName, singerName, image, topNumber }) => (
  <div className="mv-zing-chart-card-wrapper">
    <ThumbnailSong
      className="thumbnail-mv"
      image={image}
      width="110px"
      topNumber={topNumber}
    />
    <SongInformation
      className="mv-information"
      singerName={singerName}
      songName={songName}
    />
  </div>
);

MVZingChartCard.propTypes = {
  topNumber: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
  image: PropTypes.string,
};
export default MVZingChartCard;
