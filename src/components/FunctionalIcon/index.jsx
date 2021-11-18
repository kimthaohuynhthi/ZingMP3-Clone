// libs
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  VerticalAlignBottomOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
// others
import "./style.scss";

const FunctionalIcon = ({ className }) => (
  <div className={classNames("functional-icon-wrapper", className)}>
    <a href="/">
      <VerticalAlignBottomOutlined />
    </a>
    <a href="/">
      <PlusOutlined />
    </a>
    <a href="/">
      <ShareAltOutlined />
    </a>
  </div>
);
FunctionalIcon.propTypes = {
  className: PropTypes.string,
};
export default FunctionalIcon;
