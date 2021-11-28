// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import VideoCard from "../../components/VideoCard";
//actions
import { fetchVideoHot } from "../../../../redux/actions/fetchData";
// mocks
import listVideo from "../../../../mocks/ListVideo";
// others
import "./style.scss";

const ListVideo = () => {
  const dispatch = useDispatch();
  const stateVideo = useSelector((state) => state.dataReducer.dataVideo);

  useEffect(() => {
    dispatch(fetchVideoHot(listVideo));
  }, []);

  return (
    <div className="list-video-wrapper">
      <ul className="list-video-wrapper-inner">
        {stateVideo.map((video) => (
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
};
export default ListVideo;
