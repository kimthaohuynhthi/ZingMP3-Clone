// libs
import React from "react";
// components
import Title from "../../../../components/Title";
import MenuZingChart from "../../../../components/MenuZingChart";
import BannerTop1 from "../../../../components/BannerTop1";
import ListMV from "./ListMV";
// image
import banner from "../../../../assets/WeeklyMVRanking/banner.jpeg";
// others
import "./style.scss";

const WeeklyMVRanking = () => (
  <div className="weekly-mv-ranking-wrapper">
    <div className="weekly-mv-ranking-wrapper-inner">
      <Title titleName="#ZINGCHART TUẦN - MV" fontSize="18px" isShow="true" />
      <MenuZingChart />
      <BannerTop1
        className="banner"
        image={banner}
        width="100%"
        height="120px"
        color="white"
      />
      <ListMV />
    </div>
  </div>
);
export default WeeklyMVRanking;
