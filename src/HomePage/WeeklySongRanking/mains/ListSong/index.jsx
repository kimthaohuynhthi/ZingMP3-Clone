// libs
import React from "react";
// components
import SongCard from "../../components/SongCard";
// mocks
import songInTopZingChart from "../../../../mocks/SongInTopZingChart";
// others
import "./style.scss";

const ListSong = () => (
  <div className="list-song-wrapper">
    {songInTopZingChart.map((song) => (
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
export default ListSong;
