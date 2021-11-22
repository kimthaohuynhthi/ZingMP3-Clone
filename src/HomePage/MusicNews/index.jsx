// libs
import React from "react";
// components
import Title from "../../components/Title";
import ListNews from "./ListNews";
// image
import bg from "../../assets/MusicNews/bg.webp";
// others
import "./style.scss";

const MusicNews = () => (
  <div className="music-news-wrapper">
    <Title titleName="TIN TỨC ÂM NHẠC" fontSize="20px" />
    <img src={bg} alt="news" />
    <p>Lý do năm 2022 sẽ là năm của BTS</p>
    <ListNews />
  </div>
);
export default MusicNews;
