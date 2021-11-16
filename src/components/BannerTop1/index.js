// libs
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

const BannerTop1 = ({ image, width, height }) => (
  <div className={classNames("banner-wrapper", { rankingWrapper: !image })}>
    <a href="/" className="banner-wrapper-inner">
      <img src={image} style={{ width, height }} alt="banner" />
    </a>
  </div>
);

BannerTop1.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
export default BannerTop1;
