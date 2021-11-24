// libs
import React from "react";
// components
import AlbumCard from "../../components/AlbumCard";
import Pagination from "../../../../components/Pagination";
// mocks
import listAlbum from "../../../../mocks/ListAlbum";
// others
import "./style.scss";

const ListAlbum = () => (
  <div className="list-album-wrapper">
    <ul className="list-album-wrapper-inner">
      {listAlbum.map((album) => (
        <li key={album.id}>
          <AlbumCard
            songName={album.albumName}
            singerName={album.singerName}
            image={album.img}
          />
        </li>
      ))}
    </ul>
    <Pagination page={{ currentPage: 1, itemsPerPage: 12, total: 12 }} />
  </div>
);
export default ListAlbum;
