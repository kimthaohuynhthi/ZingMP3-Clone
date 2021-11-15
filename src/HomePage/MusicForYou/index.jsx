// libs
import React from "react";
// components
import BackgroundImage from "./mains/BackgroundImage";
import Banner from "./mains/Banner";
import Content from "./mains/Content";
// others
import "./style.scss";

const MusicForYou = () => (
  <div className="music-for-you-wrapper">
    <div className="music-for-you-wrapper-inner">
      <BackgroundImage />
      <Banner />
      <Content />
    </div>
  </div>
);
export default MusicForYou;
