// libs
import React from "react";
// image
import background from "../../../../assets/MusicForYou/background-hottopic.jpg";
// others
import "./style.scss";

const Title = () => (
  <div className="title-wrapper">
    <div className="title-wrapper-inner">
      <p className="title">CHỦ ĐỀ HOT</p>
      <a href="/" title="Hôm nay nghe gì?">
        <img src={background} alt="topic" />
      </a>
    </div>
  </div>
);
export default Title;
