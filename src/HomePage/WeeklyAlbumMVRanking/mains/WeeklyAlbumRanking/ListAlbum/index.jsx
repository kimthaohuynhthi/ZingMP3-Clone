// libs
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// components
import MVZingChartCard from "../../../components/MVZingChartCard";
// mocks
import listAlbum from "../../../../../mocks/ListAlbumZingChart";
// others
import "./style.scss";

const ListAlbum = ({ className }) => (
  <div className={classNames("list-album-zing-chart-wrapper", className)}>
    {listAlbum.map((album) => (
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

ListAlbum.propTypes = {
  className: PropTypes.string,
};
export default ListAlbum;
