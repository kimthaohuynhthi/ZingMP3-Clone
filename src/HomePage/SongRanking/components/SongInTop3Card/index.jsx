// libs
import React from "react";
// components
import TopNumber from "../../../../components/TopNumber";
import ThumbnailSong from "../../../../components/ThumbnailSong";
// image
import image from "../../../../assets/SongRanking/test.jpeg";
// others
import "./style.scss";

const SongInTop3Card = () => (
  <div className="card-wrapper">
    <div className="card-wrapper-inner">
      <TopNumber topNumber="01" numberTitle="01" fontSize="12px" />
      <ThumbnailSong image={image} width="29px" height="28px" />
    </div>
  </div>
);
export default SongInTop3Card;
