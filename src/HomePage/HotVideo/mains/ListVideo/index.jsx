// libs
import React from "react";
// components
import VideoCard from "../../components/VideoCard";
import Pagination from "../../../../components/Pagination";
// hooks
import usePagination from "../../../../hooks/usePagination";
// mocks
import listVideo from "../../../../mocks/ListVideo";
// others
import "./style.scss";

const ListVideo = () => {
  const { begin, end, currentPage, handlePageChange } = usePagination({
    currPage: 1,
    itemsPerPage: 12,
  });

  return (
    <div className="list-video-wrapper">
      <ul className="list-video-wrapper-inner">
        {listVideo.slice(begin, end).map((video) => (
          <li key={video.id}>
            <VideoCard
              songName={video.videoName}
              singerName={video.singerName}
              image={video.img}
            />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        total={listVideo.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default ListVideo;
