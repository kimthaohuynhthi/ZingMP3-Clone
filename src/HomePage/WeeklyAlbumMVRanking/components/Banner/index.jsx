// libs
import PropTypes from "prop-types";
import classNames from "classnames";
// components
import TopNumber from "../../../../components/TopNumber";
import SongInformation from "../../../../components/SongInformation";
// others
import "./style.scss";

const Banner = ({ image, songName, singerName, width, height, className }) => (
  <div className={classNames("banner-zing-chart-wrapper", className)}>
    <a href="#" className="banner-zing-chart-wrapper-inner">
      <img src={image} style={{ width, height }} alt="banner" />
      <div className="top-1">
        <TopNumber
          className="top-number-banner"
          topNumber="00"
          numberTitle="01"
          fontSize="20px"
        />
        <SongInformation
          className="song-info-banner"
          songName={songName}
          singerName={singerName}
          color="white"
        />
      </div>
    </a>
  </div>
);

Banner.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  songName: PropTypes.string,
  singerName: PropTypes.string,
};
export default Banner;
