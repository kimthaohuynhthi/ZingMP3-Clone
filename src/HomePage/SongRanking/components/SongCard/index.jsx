// libs
import React from "react";
import { MinusOutlined } from "@ant-design/icons";
// components
import TopNumber from "../../../../components/TopNumber";
import ThumbnailSong from "../../../../components/ThumbnailSong";
import SongInformation from "../../../../components/SongInformation";
// image
import image from "../../../../assets/SongRanking/test.jpeg";
// others
import "./style.scss";
import FunctionalIcon from "./FunctionalIcon";

const SongCard = () => (
  <div className="song-card-wrapper">
    <div className="song-card-wrapper-inner">
      <div className="top-number">
        <TopNumber topNumber="orthers" numberTitle="01" fontSize="20px" />
      </div>
      <div className="icon">
        <MinusOutlined />
      </div>
      <div className="thumbnail">
        <ThumbnailSong image={image} width="60px" height="61px" />
      </div>
      <div className="song-info">
        <SongInformation
          songName="Có Chút Ngọt Có Chút Ngọt"
          singerName="Kim Thảo"
        />
      </div>
      <div className="functional-icon">
        <FunctionalIcon />
      </div>
    </div>
  </div>
);
export default SongCard;
