// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
// components
import MVZingChartCard from "../../../components/MVZingChartCard";
//actions
import { fetchZingChartMV } from "../../../../../redux/actions/fetchData";
// mocks
import listMV from "../../../../../mocks/ListMV";
// others
import "./style.scss";

const ListMV = ({ className }) => {
  const dispatch = useDispatch();
  const stateZingChartMV = useSelector(
    (state) => state.dataReducer.dataZingChartMV
  );

  useEffect(() => {
    dispatch(fetchZingChartMV(listMV));
  }, []);

  return (
    <div className={classNames("list-mv-wrapper", className)}>
      {stateZingChartMV.map((mv) => (
        <ul className="list-mv-wrapper-inner" key={mv.id}>
          <li>
            <MVZingChartCard
              image={mv.image}
              songName={mv.name}
              singerName={mv.singer}
              topNumber={mv.topNumber}
              width="110px"
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

ListMV.propTypes = {
  className: PropTypes.string,
};
export default ListMV;
