// libs
import React from "react";
// icons
import { PlayCircleOutlined } from "@ant-design/icons";
// image
import background from "../../assets/MusicForYou/background.png";
import image from "../../assets/MusicForYou/musicforyou.jpeg";
// others
import "./style.scss";

const MusicForYou = () => (
  <div className="music-for-you-wrapper">
    <div className="music-for-you-wrapper-inner">
      <div className="background-image">
        <img alt="background" src={background} />
      </div>
      <div className="banner" title="Playlist của bạn">
        <a href="/">
          <img src={image} alt="music-for-you" />
        </a>
        <PlayCircleOutlined className="play-icon" />
      </div>
      <div className="content-music-for-you">
        <a href="/" className="title">
          <b>Dành Riêng Cho Bạn</b>
          <p>
            Nghe những ca khúc yêu thích và khám phá âm nhạc dành riêng cho bạn.
          </p>
        </a>
      </div>
    </div>
  </div>
);
export default MusicForYou;
