// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
// components
import MVZingChartCard from "../../../components/MVZingChartCard";
//actions
import { fetchZingChartAlbum } from "../../../../../redux/actions/fetchData";
// mocks
import listAlbum from "../../../../../mocks/ListAlbumZingChart";
// others
import "./style.scss";

const ListAlbum = ({ className }) => {
  const dispatch = useDispatch();
  const stateZingChartAlbum = useSelector(
    (state) => state.dataReducer.dataZingChartAlbum
  );

  useEffect(() => {
    dispatch(fetchZingChartAlbum(listAlbum));
  }, []);

  return (
    <div className={classNames("list-album-zing-chart-wrapper", className)}>
      {stateZingChartAlbum.map((album) => (
        <ul className="list-album-zing-chart-wrapper-inner" key={album.id}>
          <li>
            <MVZingChartCard
              image={album.image}
              songName={album.name}
              singerName={album.singer}
              topNumber={album.topNumber}
              width="100px"
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

ListAlbum.propTypes = {
  className: PropTypes.string,
};
export default ListAlbum;
