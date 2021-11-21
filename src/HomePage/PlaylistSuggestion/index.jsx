// libs
import React from "react";
// components
import ListPlaylist from "./mains/ListPlaylist";
// others
import "./style.scss";

const PlaylistSuggestion = () => (
  <div className="playlist-suggestion-wrapper">
    <div className="playlist-suggestion-wrapper-inner">
      <h3 className="title">LỰA CHỌN HÔM NAY</h3>
      <ListPlaylist />
    </div>
  </div>
);
export default PlaylistSuggestion;
