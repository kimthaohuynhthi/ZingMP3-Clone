// libs
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// components
import MVZingChartCard from "../MVZingChartCard";
// mocks
import songInTopZingChart from "../../../../../mocks/SongInTopZingChart";
// others
import "./style.scss";

const ListMV = ({ className }) => (
  <div className={classNames("list-mv-wrapper", className)}>
    {songInTopZingChart.map((song) => (
      <ul className="list-mv-wrapper-inner" key={song.id}>
        <li>
          <MVZingChartCard
            topNumber="zing-chart"
            numberTitle={song.number}
            songName={song.name}
            singerName={song.singer}
          />
        </li>
      </ul>
    ))}
  </div>
);

ListMV.propTypes = {
  className: PropTypes.string,
};
export default ListMV;
