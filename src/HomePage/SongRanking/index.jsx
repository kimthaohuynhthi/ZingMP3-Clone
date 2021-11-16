// libs
import React from "react";
// component
import RankingChart from "./mains/RankingChart";
import TopSong from "./mains/TopSong";
// others
import "./style.scss";

const SongRanking = () => (
  <div className="song-ranking-wrapper">
    <RankingChart />
    <TopSong />
  </div>
);
export default SongRanking;
