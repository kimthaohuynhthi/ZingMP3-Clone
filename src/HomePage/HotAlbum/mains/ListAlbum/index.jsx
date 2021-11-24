// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import AlbumCard from "../../components/AlbumCard";
//actions
import { fetchAlbumHot } from "../../../../redux/actions/fetchData";
// mocks
import listAlbum from "../../../../mocks/ListAlbum";
// others
import "./style.scss";

const ListAlbum = () => {
  const dispatch = useDispatch();
  const stateAlbum = useSelector((state) => state.dataReducer.data);

  useEffect(() => {
    dispatch(fetchAlbumHot(listAlbum));
  }, []);

  return (
    <div className="list-album-wrapper">
      <ul className="list-album-wrapper-inner">
        {stateAlbum.map((album) => (
          <li key={album.id}>
            <AlbumCard
              songName={album.albumName}
              singerName={album.singerName}
              image={album.img}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListAlbum;
