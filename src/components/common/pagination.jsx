import React from 'react';
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = ({itemCount, pageSize, currentPage, onpageChange}) => {
   
  

    const pagesCount = Math.ceil( itemCount / pageSize );
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return(
        <nav >
        <ul className="pagination">
            { pages.map(page => (


          <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
              <a className="page-link" onClick={() => onpageChange(page)}>{page}</a>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
  Pagination.propTypes = {
    itemCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
  };
 
export default Pagination;