// libs
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

const TopNumber = ({ topNumber, numberTitle, fontSize, className }) => (
  <div
    className={classNames(
      "top-number-wrapper",
      "top-number-wrapper-inner",
      { [`top-${topNumber}-song-ranking`]: true },
      className
    )}
    style={{ fontSize }}
  >
    {numberTitle}
  </div>
);
TopNumber.propTypes = {
  topNumber: PropTypes.string,
  numberTitle: PropTypes.string,
  fontSize: PropTypes.string,
  className: PropTypes.string,
};

export default TopNumber;
