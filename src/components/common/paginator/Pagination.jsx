import React from "react";
import style from "./Pagination.module.css";

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((item) => {
          return (
            <span
              className={props.currentPage === item ? style.selectedPage : ""}
              onClick={() => {
                props.onPageChange(item);
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
