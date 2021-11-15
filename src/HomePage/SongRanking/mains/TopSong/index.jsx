// libs
import React from "react";
import SongCard from "../../components/SongCard";
// others
import "./style.scss";

const TopSong = () => (
  <div className="top-song-wrapper">
    <ul className="top-song-wrapper-inner">
      <li>
        <SongCard />
      </li>
    </ul>
    <ul className="top-song-wrapper-inner">
      <li>
        <SongCard />
      </li>
    </ul>
    <ul className="top-song-wrapper-inner">
      <li>
        <SongCard />
      </li>
    </ul>
    <ul className="top-song-wrapper-inner">
      <li>
        <SongCard />
      </li>
    </ul>
    <ul className="top-song-wrapper-inner">
      <li>
        <SongCard />
      </li>
    </ul>
  </div>
);
export default TopSong;
