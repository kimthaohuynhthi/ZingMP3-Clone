// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInformation from "../../../../components/SongInformation";
// others
import "./style.scss";

const MVZingChartCard = ({ songName, singerName, image, topNumber, width }) => (
  <div className="mv-zing-chart-card-wrapper">
    <ThumbnailSong
      className="thumbnail-mv"
      image={image}
      width={width}
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
  width: PropTypes.string,
};
export default MVZingChartCard;
