// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

const MenuItems = ({ title, label }) => (
  <div className="menu-item-wrapper">
    <div className="menu-item-wrapper-inner">
      <a href="#" title={title}>
        {label}
      </a>
    </div>
  </div>
);
MenuItems.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
};
export default MenuItems;
