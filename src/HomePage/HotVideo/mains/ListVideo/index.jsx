// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import VideoCard from "../../components/VideoCard";
import Pagination from "../../../../components/Pagination";
// hooks
import usePagination from "../../../../hooks/usePagination";
import useHover from "../../../../hooks/useHover";
//actions
import { fetchVideoHot } from "../../../../redux/actions/fetchData";
// mocks
import listVideo from "../../../../mocks/ListVideo";
// others
import "./style.scss";

const ListVideo = () => {
  const dispatch = useDispatch();
  const [hover, isHovered] = useHover();
  const stateVideo = useSelector((state) => state.dataReducer.dataVideo);
  const { begin, end, currentPage, handlePageChange } = usePagination({
    currPage: 1,
    itemsPerPage: 12,
    totalData: listVideo.length,
    isHover: isHovered,
  });

  useEffect(() => {
    dispatch(fetchVideoHot(listVideo));
  }, []);

  return (
    <div className="list-video-wrapper" ref={hover}>
      <ul className="list-video-wrapper-inner">
        {stateVideo.slice(begin, end).map((video) => (
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
