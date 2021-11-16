import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import classNames from "classnames";

export default function Tags() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);
  const { group } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="base-wrapper">
        <div className="card-wrapper">
          {group.map((it, index) => {
            return (
              <Link
                key={it.tag}
                to={`/tags/${it.tag}`}
                className={classNames(
                  "py-1 px-4 shadow-md rounded-full bg-red-300 inline-block m-2",
                  {
                    "mr-4": index !== group.length - 1,
                  }
                )}
              >
                {it.tag + " " + it.totalCount}
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
