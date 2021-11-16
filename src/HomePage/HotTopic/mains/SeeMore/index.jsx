// libs
import React from "react";
import { RightOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const SeeMore = () => (
  <div className="see-more-wrapper">
    <div className="see-more-wrapper-inner">
      <a href="/">
        Xem thêm Chủ Đề khác
        <RightOutlined className="icon" />
      </a>
    </div>
  </div>
);
export default SeeMore;
