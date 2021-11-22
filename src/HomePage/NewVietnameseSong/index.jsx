// libs
import React from "react";
// components
import Title from "../../components/Title";
import VietNameseSongCard from "./components/VietnameseSongCard";
// mock
import listVietnameseSong from "../../mocks/VietnameseSong";
// others
import "./style.scss";

const NewVietnameseSong = () => (
  <div className="new-song-wrapper">
    <Title titleName="NHẠC VIỆT MỚI" fontSize="24px" />
    <ul>
      {listVietnameseSong.map((song) => (
        <li key={song.id}>
          <VietNameseSongCard
            songName={song.name}
            singerName={song.singer}
            image={song.img}
          />
        </li>
      ))}
    </ul>
  </div>
);
export default NewVietnameseSong;
