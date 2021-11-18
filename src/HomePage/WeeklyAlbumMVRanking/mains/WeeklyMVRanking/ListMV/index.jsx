// libs
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// components
import MVZingChartCard from "../MVZingChartCard";
// mocks
import listMV from "../../../../../mocks/ListMV";
// others
import "./style.scss";

const ListMV = ({ className }) => (
  <div className={classNames("list-mv-wrapper", className)}>
    {listMV.map((mv) => (
      <ul className="list-song-wrapper-inner" key={mv.id}>
        <li>
          <MVZingChartCard
            image={mv.image}
            songName={mv.name}
            singerName={mv.singer}
            topNumber={mv.topNumber}
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
