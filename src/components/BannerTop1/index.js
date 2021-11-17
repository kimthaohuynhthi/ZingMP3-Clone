// libs
import PropTypes from "prop-types";
// components
import SongCard from "../../HomePage/WeeklySongRanking/components/SongCard";
// others
import "./style.scss";

const BannerTop1 = ({ image, width, height }) => (
  <div className="banner-top-1-wrapper">
    <a href="/" className="banner-top-1-wrapper-inner">
      <img src={image} style={{ width, height }} alt="banner" />
      <div className="top-1">
        <SongCard
          topNumber="top-1-zing-chart"
          numberTitle="01"
          songName="Thay Lòng"
          singerName="DIMZ, TVk, NH4T"
        />
      </div>
    </a>
  </div>
);

BannerTop1.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
export default BannerTop1;
