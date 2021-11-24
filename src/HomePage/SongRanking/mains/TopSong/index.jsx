// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import SongCard from "../../components/SongCard";
//actions
import { fetchSongInTop } from "../../../../redux/actions/fetchData";
// mocks
import songInTop from "../../../../mocks/TopSong";
// others
import "./style.scss";

const TopSong = () => {
  const dispatch = useDispatch();
  const stateSongInTop = useSelector(
    (state) => state.dataReducer.dataSongInTop
  );

  useEffect(() => {
    dispatch(fetchSongInTop(songInTop));
  }, []);

  return (
    <div className="top-song-wrapper">
      {stateSongInTop.map((song) => (
        <ul className="top-song-wrapper-inner" key={song.id}>
          <li>
            <SongCard
              topNumber={song.rank}
              numberTitle={song.number}
              image={song.img}
              songName={song.name}
              singerName={song.singer}
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TopSong;
