// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
// components
import MVZingChartCard from "../../WeeklyAlbumMVRanking/components/MVZingChartCard";
//actions
import { fetchMusicNews } from "../../../redux/actions/fetchData";
// mocks
import listNews from "../../../mocks/ListNews";
// others
import "./style.scss";

const ListNews = ({ className }) => {
  const dispatch = useDispatch();
  const stateNews = useSelector((state) => state.dataReducer.dataNews);

  useEffect(() => {
    dispatch(fetchMusicNews(listNews));
  }, []);

  return (
    <div className={classNames("list-news-wrapper", className)}>
      {stateNews.map((news) => (
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
};

ListNews.propTypes = {
  className: PropTypes.string,
};
export default ListNews;
