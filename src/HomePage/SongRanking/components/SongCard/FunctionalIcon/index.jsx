// libs
import {
  VerticalAlignBottomOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
// others
import "./style.scss";

const FunctionalIcon = () => (
  <div className="functional-icon-wrapper">
    <a href="/">
      <VerticalAlignBottomOutlined key="first" />
    </a>
    <a href="/">
      <PlusOutlined key="second" />
    </a>
    <a href="/">
      <ShareAltOutlined key="huhu" />
    </a>
  </div>
);

export default FunctionalIcon;
