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

export default FunctionalIcon;
