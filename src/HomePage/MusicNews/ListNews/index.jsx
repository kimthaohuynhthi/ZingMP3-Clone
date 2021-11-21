// libs
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// components
import MVZingChartCard from "../../WeeklyAlbumMVRanking/components/MVZingChartCard";
// mocks
import listNews from "../../../mocks/ListNews";
// others
import "./style.scss";

const ListNews = ({ className }) => (
  <div className={classNames("list-news-wrapper", className)}>
    {listNews.map((news) => (
      <ul className="list-news-wrapper-inner" key={news.id}>
        <li>
          <MVZingChartCard
            image={news.image}
            songName={news.name}
            width="100px"
            height="50px"
          />
        </li>
      </ul>
    ))}
  </div>
);

ListNews.propTypes = {
  className: PropTypes.string,
};
export default ListNews;
