// libs
import React from "react";
// icons
import { PlayCircleOutlined } from "@ant-design/icons";
// image
import image from "../../../../assets/MusicForYou/musicforyou.jpeg";
// others
import "./style.scss";

const Banner = () => (
  <div className="banner-wrapper">
    <div className="banner-wrapper-inner" title="Playlist của bạn">
      <a href="#">
        <img src={image} alt="music-for-you" />
      </a>
      <PlayCircleOutlined className="play-icon" />
    </div>
  </div>
);
export default Banner;
