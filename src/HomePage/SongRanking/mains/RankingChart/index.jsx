// libs
import React from "react";
// components
import SongInTop3Card from "../../components/SongInTop3Card";
// mocks
import top3Song from "../../../../mocks/SongInTop3";
// others
import "./style.scss";

const RankingChart = () => (
  <div className="ranking-chart-wrapper">
    <div className="ranking-chart-wrapper-inner">
      {top3Song.map((song) => (
        <ul>
          <li key={song.id}>
            <SongInTop3Card
              topNumber={song.number}
              numberTitle={song.number}
              percent={song.percent}
              image={song.img}
              songName={song.name}
              singerName={song.singer}
            />
          </li>
        </ul>
      ))}
    </div>
  </div>
);
export default RankingChart;
