// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import PlaylistCard from "../../components/PlaylistCard";
//actions
import { fetchPlaylist } from "../../../../redux/actions/fetchData";
// mocks
import listPlayList from "../../../../mocks/ListPlaylist";
// others
import "./style.scss";

const ListPlaylist = () => {
  const dispatch = useDispatch();
  const statePlaylist = useSelector((state) => state.dataReducer.dataPlaylist);

  useEffect(() => {
    dispatch(fetchPlaylist(listPlayList));
  }, []);

  return (
    <div className="list-playlist-wrapper">
      <ul className="list-playlist-wrapper-inner">
        {statePlaylist.map((playlist) => (
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
};

export default ListPlaylist;
