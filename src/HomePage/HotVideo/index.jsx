// libs
import React from "react";
// components
import Title from "../../components/Title";
import ListVideo from "./mains/ListVideo";
import Pagination from "../../components/Pagination";
// others
import "./style.scss";

const HotVideo = () => (
  <div className="hot-video-wrapper">
    <Title className="title-hot-video" titleName="VIDEO HOT" fontSize="26px" />
    <ListVideo />
    <Pagination />
  </div>
);
export default HotVideo;
