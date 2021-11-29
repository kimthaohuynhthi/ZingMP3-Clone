// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import AlbumCard from "../../components/AlbumCard";
import Pagination from "../../../../components/Pagination";
// hooks
import usePagination from "../../../../hooks/usePagination";
import useHover from "../../../../hooks/useHover";
//actions
import { fetchAlbumHot } from "../../../../redux/actions/fetchData";
// mocks
import listAlbum from "../../../../mocks/ListAlbum";
// others
import "./style.scss";

const ListAlbum = () => {
  const dispatch = useDispatch();
  const [hover, isHovered] = useHover();
  const stateAlbum = useSelector((state) => state.dataReducer.dataAlbum);
  const { begin, end, currentPage, handlePageChange } = usePagination({
    currPage: 1,
    itemsPerPage: 12,
    totalData: listAlbum.length,
    isHover: isHovered,
  });

  useEffect(() => {
    dispatch(fetchAlbumHot(listAlbum));
  }, []);

  return (
    <div className="list-album-wrapper" ref={hover}>
      <ul className="list-album-wrapper-inner">
        {stateAlbum.slice(begin, end).map((album) => (
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
