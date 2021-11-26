// libs
import React from "react";
// components
import VideoCard from "../../components/VideoCard";
import Pagination from "../../../../components/Pagination";
// hooks
import usePagination from "../../../../hooks/usePagination";
import useHover from "../../../../hooks/useHover";
// mocks
import listVideo from "../../../../mocks/ListVideo";
// others
import "./style.scss";

const ListVideo = () => {
  const [hover, setHover] = useHover();
  const { begin, end, currentPage, handlePageChange } = usePagination({
    currPage: 1,
    itemsPerPage: 12,
    totalData: listVideo.length,
    isHover: setHover,
  });

  return (
    <div className="list-video-wrapper" ref={hover}>
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
