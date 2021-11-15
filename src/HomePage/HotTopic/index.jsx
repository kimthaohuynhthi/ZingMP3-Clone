// libs
import React from "react";
// components
import Title from "./mains/Title";
import SeeMore from "./mains/SeeMore";
// others
import "./style.scss";

const HotTopic = () => (
  <div className="hot-topic-wrapper">
    <div className="hot-topic-wrapper-inner">
      <Title />
      <SeeMore />
    </div>
  </div>
);
export default HotTopic;
