// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
// components
import SongCard from "../../components/SongCard";
//actions
import { fetchZingChartSong } from "../../../../redux/actions/fetchData";
// mocks
import songInTopZingChart from "../../../../mocks/SongInTopZingChart";
// others
import "./style.scss";

const ListSong = ({ className }) => {
  const dispatch = useDispatch();
  const stateZingChartSong = useSelector(
    (state) => state.dataReducer.dataZingChartSong
  );

  useEffect(() => {
    dispatch(fetchZingChartSong(songInTopZingChart));
  }, []);

  return (
    <div className={classNames("list-song-wrapper", className)}>
      {stateZingChartSong.map((song) => (
        <ul className="list-song-wrapper-inner" key={song.id}>
          <li>
            <SongCard
              topNumber="zing-chart"
              numberTitle={song.number}
              songName={song.name}
              singerName={song.singer}
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

ListSong.propTypes = {
  className: PropTypes.string,
};
export default ListSong;
