// libs
import React from "react";
// components
import Title from "../../../../components/Title";
import MenuZingChart from "../../../../components/MenuZingChart";
import Banner from "../../components/Banner";
import ListMV from "./ListMV";
// image
import banner from "../../../../assets/WeeklyMVRanking/banner.jpeg";
// others
import "./style.scss";

const WeeklyMVRanking = () => (
  <div className="weekly-mv-ranking-wrapper">
    <div className="weekly-mv-ranking-wrapper-inner">
      <Title
        titleName="#ZINGCHART TUẦN - MV"
        fontSize="18px"
        isShow={Boolean(true)}
      />
      <MenuZingChart />
      <Banner
        className="banner"
        image={banner}
        width="328px"
        height="120px"
        singerName="Nguyễn Thạc Bảo Ngọc"
        songName="Em Quá Khờ Dại"
      />
      <ListMV />
    </div>
  </div>
);
export default WeeklyMVRanking;
