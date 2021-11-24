// libs
import { Button } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";
// others
import "./style.scss";

const Pagination = ({ currentPage, total, onPageChange }) => {
  const maxPage = Math.ceil(total / 12);

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div className="pagination-wrapper">
      <Button
        className={classNames("previous", { disable: currentPage === 1 })}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &laquo;
      </Button>
      <p>
        {currentPage}/{maxPage}
      </p>
      <Button
        className={classNames("next", { disable: currentPage === maxPage })}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        &raquo;
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  onPageChange: null,
};

export default Pagination;
