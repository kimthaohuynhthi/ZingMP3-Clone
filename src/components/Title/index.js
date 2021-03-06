// libs
import PropTypes from "prop-types";
import classNames from "classnames";
import { RightOutlined, PlayCircleTwoTone } from "@ant-design/icons";
// others
import "./style.scss";

const Title = ({ titleName, fontSize, isShow, className }) => (
  <div className={classNames("title-wrapper", className)}>
    <h3 style={{ fontSize }}>
      <a href="#">
        {titleName}
        <RightOutlined />
      </a>
      <a href="#" className={classNames("play-icon-title", { show: isShow })}>
        <PlayCircleTwoTone twoToneColor="darkgray" />
      </a>
    </h3>
  </div>
);
Title.propTypes = {
  titleName: PropTypes.string,
  fontSize: PropTypes.string,
  isShow: PropTypes.bool,
  className: PropTypes.string,
};
export default Title;
