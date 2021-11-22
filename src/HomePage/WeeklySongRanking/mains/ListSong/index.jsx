// libs
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// components
import SongCard from "../../components/SongCard";
// mocks
import songInTopZingChart from "../../../../mocks/SongInTopZingChart";
// others
import "./style.scss";

const ListSong = ({ className }) => (
  <div className={classNames("list-song-wrapper", className)}>
    {songInTopZingChart.map((song) => (
      <ul className="list-song-wrapper-inner" key={song.id}>
        <li>
          <SongCard
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

ListSong.propTypes = {
  className: PropTypes.string,
};
export default ListSong;
