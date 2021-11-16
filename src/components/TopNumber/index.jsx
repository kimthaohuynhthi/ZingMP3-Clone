// libs
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

const TopNumber = ({ topNumber, numberTitle, fontSize }) => (
  <div
    className={classNames(
      "top-number-wrapper",
      "top-number-inner",
      { "top-1-song-ranking": topNumber === "01" },
      { "top-2-song-ranking": topNumber === "02" },
      { "top-3-song-ranking": topNumber === "03" },
      { "top-1-zing-chart": topNumber === "top-1-zing-chart" },
      { "zing-chart": topNumber === "zing-chart" },
      { "others-song-ranking": topNumber === "others" }
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
};

export default TopNumber;
