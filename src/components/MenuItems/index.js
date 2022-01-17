// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

/**
 * @module MenuItems - return items of menu
 * @param {Object} props - Properties
 * @param {string} props.title - Title of menu
 * @param {string} props.label - label of menu
 * @return {React.ReactElement}
 */

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
