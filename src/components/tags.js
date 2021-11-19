import React from "react";
import { Link } from "gatsby";

export default function Tags({ tags }) {
  return (
    <div>
      {tags.map((tag) => {
        return (
          <Link
            to={`/tags/${tag}`}
            key="tag"
            className="hover:underline text-link dark:text-link-dark mr-1"
          >
            # {tag}
          </Link>
        );
      })}
    </div>
  );
}
