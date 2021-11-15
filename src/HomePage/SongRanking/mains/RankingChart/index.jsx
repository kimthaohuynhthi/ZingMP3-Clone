// libs
import React from "react";
// components
import SongInTop3Card from "../../components/SongInTop3Card";
// others
import "./style.scss";

const RankingChart = () => (
  <div className="ranking-chart-wrapper">
    <div className="ranking-chart-wrapper-inner">
      <ul>
        <li>
          <SongInTop3Card />
        </li>
      </ul>
      <ul>
        <li>
          <SongInTop3Card />
        </li>
      </ul>
      <ul>
        <li>
          <SongInTop3Card />
        </li>
      </ul>
    </div>
  </div>
);
export default RankingChart;
