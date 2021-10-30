import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

export default function Pagination({ pageInfo }) {
  const { prev, next } = pageInfo;
  return (
    <div
      className={classNames(
        "flex",
        "py-6",
        "lg:justify-between",
        "flex-col",
        "lg:flex-row",
        {
          "float-right": !prev,
        }
      )}
    >
      {prev && (
        <Link to={prev.slug} className="pagination-btn mb-4 lg:mb-0">
          <i
            className="fill-current text-content-200 dark:text-content-200-dark"
            data-eva="arrow-back"
          />
          <div>{prev.title}</div>
        </Link>
      )}
      {next && (
        <Link to={next.slug} className="pagination-btn">
          <div>{next.title}</div>
          <i
            className="fill-current text-content-200 dark:text-content-200-dark"
            data-eva="arrow-forward"
          />
        </Link>
      )}
    </div>
  );
}
