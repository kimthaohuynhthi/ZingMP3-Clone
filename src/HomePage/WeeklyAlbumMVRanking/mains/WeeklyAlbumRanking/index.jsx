// libs
import React from "react";
// components
import Title from "../../../../components/Title";
import MenuZingChart from "../../../../components/MenuZingChart";
import BannerTop1 from "../../../../components/BannerTop1";
import ListAlbum from "./ListAlbum";
// image
import banner from "../../../../assets/WeeklyMVRanking/banner.jpeg";
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
      <BannerTop1
        className="banner"
        image={banner}
        width="100%"
        height="120px"
      />
      <ListAlbum />
    </div>
  </div>
);
export default WeeklyAlbumRanking;
