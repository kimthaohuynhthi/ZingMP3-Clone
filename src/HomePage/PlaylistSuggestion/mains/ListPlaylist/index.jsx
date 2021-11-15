// libs
import React from "react";
// components
import PlaylistCard from "../../components/PlaylistCard";
// mocks
import listPlayList from "../../../../mocks/ListPlaylist";
// others
import "./style.scss";

const ListPlaylist = () => (
  <div className="list-playlist-wrapper">
    <ul className="list-playlist-wrapper-inner">
      {listPlayList.map((playlist) => (
        <li key={playlist.id}>
          <PlaylistCard
            songName={playlist.songName}
            singerName={playlist.singerNamer}
            image={playlist.img}
          />
        </li>
      ))}
    </ul>
  </div>
);
export default ListPlaylist;
