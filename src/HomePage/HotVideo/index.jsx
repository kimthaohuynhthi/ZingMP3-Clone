// libs
import React from "react";
// components
import Title from "../../components/Title";
import ListVideo from "./mains/ListVideo";
// others
import "./style.scss";

const HotVideo = () => (
  <div className="hot-video-wrapper">
    <Title titleName="VIDEO HOT" fontSize="26px" />
    <div>
      <ListVideo />
    </div>
  </div>
);
export default HotVideo;
