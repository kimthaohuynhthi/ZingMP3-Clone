// libs
import React from "react";
// components
import Title from "../../../../components/Title";
import MenuZingChart from "../../../../components/MenuZingChart";
import Banner from "../../components/Banner";
import ListAlbum from "./ListAlbum";
// image
import banner from "../../../../assets/WeeklyAlbumRanking/banner.jpg";
// others
import "./style.scss";

const WeeklyAlbumRanking = () => (
  <div className="weekly-album-ranking-wrapper">
    <div className="weekly-album-ranking-wrapper-inner">
      <Title
        titleName="#ZINGCHART TUẦN - ALBUM"
        fontSize="18px"
        isShow={Boolean(true)}
      />
      <MenuZingChart />
      <Banner
        className="banner"
        image={banner}
        width="328px"
        height="120px"
        singerName="Nhiều nghệ sĩ"
        songName="Xuân Hạ Thu Đông, rồi lại Xuân - Tập 7"
      />
      <ListAlbum />
    </div>
  </div>
);
export default WeeklyAlbumRanking;
