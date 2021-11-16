// libs
import PropTypes from "prop-types";
import { RightOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const Title = ({ titleName, fontSize }) => (
  <div className="title-wrapper">
    <h3 style={{ fontSize }}>
      <a href="/" className="title-link">
        {titleName}
        <RightOutlined />
      </a>
    </h3>
  </div>
);
Title.propTypes = {
  titleName: PropTypes.string,
  fontSize: PropTypes.string,
};
export default Title;
