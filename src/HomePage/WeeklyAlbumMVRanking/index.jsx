//libs
import React from "react";
// components
import WeeklyAlbumRanking from "./mains/WeeklyAlbumRanking";
import WeeklyMVRanking from "./mains/WeeklyMVRanking";
//others
import "./style.scss";

const WeeklyAlbumMVRanking = () => (
  <div className="album-ranking-wrapper">
    <WeeklyMVRanking />
    <WeeklyAlbumRanking />
  </div>
);
export default WeeklyAlbumMVRanking;
