// libs
import React from "react";
import { RightOutlined } from "@ant-design/icons";
// image
import background from "../../assets/MusicForYou/background-hottopic.jpg";
// others
import "./style.scss";

const HotTopic = () => (
  <div className="hot-topic-wrapper">
    <div className="hot-topic-wrapper-inner">
      <p className="title">CHỦ ĐỀ HOT</p>
      <a href="/" title="Hôm nay nghe gì?">
        <img src={background} alt="topic" />
      </a>
      <div className="other">
        <a href="/">
          Xem thêm Chủ Đề khác
          <RightOutlined className="icon" />
        </a>
      </div>
    </div>
  </div>
);
export default HotTopic;
