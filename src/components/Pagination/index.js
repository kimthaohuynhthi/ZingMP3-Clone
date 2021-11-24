// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

const Pagination = ({ page }) => {
  const { currentPage, itemsPerPage, total } = page;
  const maxPage = Math.ceil(total / itemsPerPage);

  return (
    <div className="pagination-wrapper">
      <a href="#" className="previous">
        &laquo;
      </a>
      <p>
        {currentPage}/{maxPage}
      </p>
      <a href="#" className="next">
        &raquo;
      </a>
    </div>
  );
};

Pagination.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  page: PropTypes.object.isRequired,
};

export default Pagination;
