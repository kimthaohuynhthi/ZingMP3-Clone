// libs
import React from "react";
// components
import Title from "../../../../components/Title";
import MenuZingChart from "../../../../components/MenuZingChart";
// others
import "./style.scss";

const WeeklyAlbumRanking = () => (
  <div className="weekly-album-ranking-wrapper">
    <div className="weekly-album-ranking-wrapper-inner">
      <Title
        titleName="#ZINGCHART TUẦN - ALBUM"
        fontSize="18px"
        isShow="true"
      />
      <MenuZingChart />
    </div>
  </div>
);
export default WeeklyAlbumRanking;
