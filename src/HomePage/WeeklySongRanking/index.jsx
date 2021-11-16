// libs
import React from "react";
// components
import Title from "../../components/Title";
import MenuZingChart from "../../components/MenuZingChart";
// others
import "./style.scss";

const WeeklySongRanking = () => (
  <div className="weekly-song-ranking-wrapper">
    <Title
      titleName="#ZINGCHART TUẦN - BÀI HÁT"
      fontSize="18px"
      isShow="true"
    />
    <MenuZingChart />
  </div>
);
export default WeeklySongRanking;
