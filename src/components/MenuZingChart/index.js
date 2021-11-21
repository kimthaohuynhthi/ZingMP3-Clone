// libs
import classNames from "classnames";
// dataSource
import menuZingChart from "../../dataSources/MenuZingChart";
// others
import "./style.scss";

const MenuZingChart = () => (
  <ul className="menu-zing-chart-wrapper">
    {menuZingChart.map((menuItem, index) => (
      <li key={menuItem}>
        <a
          href="#"
          className={classNames({ active: index === 0 })}
          title={menuItem.title}
        >
          {menuItem.label}
        </a>
      </li>
    ))}
  </ul>
);

export default MenuZingChart;
