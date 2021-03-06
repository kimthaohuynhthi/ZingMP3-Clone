// libs
import React from "react";
// components
import Title from "../../components/Title";
import MenuZingChart from "../../components/MenuZingChart";
import BannerTop1 from "../../components/BannerTop1";
import ListSong from "./mains/ListSong";
// image
import banner from "../../assets/WeeklySongRanking/banner.jpeg";
// others
import "./style.scss";

const WeeklySongRanking = () => (
  <div className="weekly-song-ranking-wrapper">
    <div className="weekly-song-ranking-wrapper-inner">
      <Title
        titleName="#ZINGCHART TUẦN - BÀI HÁT"
        fontSize="18px"
        isShow={Boolean(true)}
      />
      <MenuZingChart />
      <BannerTop1
        className="banner"
        image={banner}
        width="100%"
        height="120px"
      />
      <ListSong className="list-song-in-top" />
    </div>
  </div>
);
export default WeeklySongRanking;
