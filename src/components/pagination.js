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
        <Link to={prev.slug} className="bg-white rounded shadow p-2">
          {prev.title}
        </Link>
      )}
      {next && (
        <Link to={next.slug} className="bg-white rounded shadow p-2">
          {next.title}
        </Link>
      )}
    </div>
  );
}
