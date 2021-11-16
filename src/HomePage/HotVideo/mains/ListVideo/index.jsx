// libs
import React from "react";
// components
import VideoCard from "../../components/VideoCard";
// mocks
import listVideo from "../../../../mocks/ListVideo";
// others
import "./style.scss";

const ListVideo = () => (
  <div className="list-video-wrapper">
    <ul className="list-video-wrapper-inner">
      {listVideo.map((video) => (
        <li key={video.id}>
          <VideoCard
            songName={video.videoName}
            singerName={video.singerName}
            image={video.img}
          />
        </li>
      ))}
    </ul>
  </div>
);
export default ListVideo;
