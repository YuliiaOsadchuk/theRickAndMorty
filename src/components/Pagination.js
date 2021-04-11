import React from "react";
import "./Pagination.scss";

const Pagination = ({ currentPage, pageCount, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        className="btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        First
      </button>
      <button
        className="btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      <button className="btn current-page">{currentPage}</button>
      <button
        className="btn"
        disabled={currentPage === pageCount}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
      <button className="btn" onClick={() => onPageChange(pageCount)}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
