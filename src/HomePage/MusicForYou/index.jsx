//libs
import React from "react";
//image
import background from "../../assets/MusicForYou/background.png";
import image from "../../assets/MusicForYou/musicforyou.jpeg";
//others
import "./style.scss";

const MusicForYou = () => (
  <div className="music-for-you-wrapper">
    <div className="music-for-you-wrapper-inner">
      <div className="background-image">
        <img alt="background" src={background} height="130px" />
      </div>
      <div className="music-for-you">
        <a href="/">
          <img src={image} alt="music-for-you" width="90px" height="90px" />
        </a>
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
