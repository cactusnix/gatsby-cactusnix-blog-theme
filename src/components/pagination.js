import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

export default function Pagination({ pageInfo }) {
  const { prev, next } = pageInfo;
  // TODO use tailwind to replace this way
  const darkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
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
        <Link to={prev.slug} className="pagination-btn mb-2 lg:mb-0">
          <i
            data-eva="arrow-back"
            data-eva-fill={darkMode ? "#f5f5f7" : "#1d1d1f"}
          />
          <div>{prev.title}</div>
        </Link>
      )}
      {next && (
        <Link to={next.slug} className="pagination-btn">
          <div>{next.title}</div>
          <i
            data-eva="arrow-forward"
            data-eva-fill={darkMode ? "#f5f5f7" : "#1d1d1f"}
          />
        </Link>
      )}
    </div>
  );
}
