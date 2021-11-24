// libs
import React from "react";
// components
import AlbumCard from "../../components/AlbumCard";
import Pagination from "../../../../components/Pagination";
// hooks
import usePagination from "../../../../hooks/usePagination";
// mocks
import listAlbum from "../../../../mocks/ListAlbum";
// others
import "./style.scss";

const ListAlbum = () => {
  const { begin, end, currentPage, handlePageChange } = usePagination({
    currPage: 1,
    itemsPerPage: 12,
  });

  return (
    <div className="list-album-wrapper">
      <ul className="list-album-wrapper-inner">
        {listAlbum.slice(begin, end).map((album) => (
          <li key={album.id}>
            <AlbumCard
              songName={album.albumName}
              singerName={album.singerName}
              image={album.img}
            />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        total={listAlbum.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default ListAlbum;
