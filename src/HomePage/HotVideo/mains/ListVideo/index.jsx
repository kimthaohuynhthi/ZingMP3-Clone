// libs
import React from "react";
// components
import VideoCard from "../../components/VideoCard";
// import Pagination from "../../../../components/Pagination";
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
    {/* <Pagination page={{ currentPage: 1, itemsPerPage: 12, total: 12 }} /> */}
  </div>
);
export default ListVideo;
