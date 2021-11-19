import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Pagination from "../components/pagination";
import classNames from "classnames";
import PostCard from "../components/postCard";

export default function Posts({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {pageContext.skip === 0 && <Bio />}
      <div
        className={classNames("base-wrapper", {
          "pt-0": pageContext.skip === 0,
        })}
      >
        {posts.map(({ node }) => (
          <PostCard node={node} />
        ))}
        <Pagination pageInfo={pageContext.pageInfo} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($limit: Int, $skip: Int) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            slug
            tags
          }
          excerpt(truncate: true, pruneLength: 85)
          id
        }
      }
    }
  }
`;
