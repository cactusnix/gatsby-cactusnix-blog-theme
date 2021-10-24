import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";

export default function Pagination({ pageInfo }) {
  const { prev, next } = pageInfo;
  return (
    <div
      className={classNames("flex", "justify-between", "py-8", {
        "float-right": !prev,
      })}
    >
      {prev && (
        <Link to={prev.slug} className="pagination-btn">
          {prev.title}
        </Link>
      )}
      {next && (
        <Link to={next.slug} className="pagination-btn">
          {next.title}
        </Link>
      )}
    </div>
  );
}
