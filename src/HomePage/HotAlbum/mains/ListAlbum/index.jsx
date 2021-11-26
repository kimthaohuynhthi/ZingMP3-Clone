// libs
import React from "react";
// components
import AlbumCard from "../../components/AlbumCard";
import Pagination from "../../../../components/Pagination";
// hooks
import usePagination from "../../../../hooks/usePagination";
import useHover from "../../../../hooks/useHover";
// mocks
import listAlbum from "../../../../mocks/ListAlbum";
// others
import "./style.scss";

const ListAlbum = () => {
  const [hover, isHovered] = useHover();
  const { begin, end, currentPage, handlePageChange } = usePagination({
    currPage: 1,
    itemsPerPage: 12,
    totalData: listAlbum.length,
    isHover: isHovered,
  });

  return (
    <div className="list-album-wrapper" ref={hover}>
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
