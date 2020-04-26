import React from "react";
import { Link } from "react-router-dom";

const Pagination = props => {
  let pageNumber = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalList.length / props.roomListPerPage);
    i++
  ) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map(num => {
          return (
            <li className="page-item" key={num}>
              <Link
                onClick={() => props.changePage(num)}
                to="/home"
                className="page-link"
              >
                {num}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
