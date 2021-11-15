// libs
import React from "react";
// components
import TopNumber from "../../../../components/TopNumber";
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInfo from "../../../../components/SongInfo";
// image
import image from "../../../../assets/SongRanking/test.jpeg";
// others
import "./style.scss";

const SongCard = () => (
  <div className="song-card-wrapper">
    <div className="song-card-wrapper-inner">
      <div className="top-number">
        <TopNumber topNumber="01" numberTitle="01" fontSize="12px" />
      </div>
      <div className="thumbnail">
        <ThumbnailSong image={image} width="30px" height="31px" />
      </div>
      <div className="song-info">
        <SongInfo songName="Có Chút Ngọt" singerName="Kim Thảo" />
      </div>
      <div className="percent">
        <TopNumber topNumber="01" numberTitle="17%" fontSize="12px" />
      </div>
    </div>
  </div>
);
export default SongCard;
