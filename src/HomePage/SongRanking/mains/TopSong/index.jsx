// libs
import React from "react";
import SongCard from "../../components/SongCard";
// mocks
import songInTop from "../../../../mocks/TopSong";
// others
import "./style.scss";

const TopSong = () => (
  <div className="top-song-wrapper">
    {songInTop.map((song) => (
      <ul className="top-song-wrapper-inner">
        <li key={song.id}>
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
export default TopSong;
