//libs
import React from "react";
// components
import WeeklyAlbumRanking from "./mains/WeekyAblumRanking";
import WeekyMVRanking from "./mains/WeekyMVRanking";
//others
import "./style.scss";

const WeeklyAlbumMVRanking = () => (
  <div className="album-ranking-wrapper">
    <WeekyMVRanking />
    <WeeklyAlbumRanking />
  </div>
);
export default WeeklyAlbumMVRanking;
