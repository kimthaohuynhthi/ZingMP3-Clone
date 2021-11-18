// libs
import PropTypes from "prop-types";
import classNames from "classnames";
// components
import SongCard from "../../HomePage/WeeklySongRanking/components/SongCard";
// others
import "./style.scss";

const BannerTop1 = ({ image, width, height, className }) => (
  <div className={classNames("banner-top-1-wrapper", className)}>
    <a href="#" className="banner-top-1-wrapper-inner">
      <img src={image} style={{ width, height }} alt="banner" />
      <div className="top-1">
        <SongCard
          topNumber="00"
          numberTitle="01"
          songName="Thay Lòng"
          singerName="DIMZ, TVk, NH4T"
          color="white"
        />
      </div>
    </a>
  </div>
);

BannerTop1.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
export default BannerTop1;
