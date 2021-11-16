import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import classNames from "classnames";
import PostCard from "../components/postCard";

export default function Tags({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges;
  const { tag } = pageContext;
  return (
    <Layout>
      <div className="base-wrapper">
        <div className="card-wrapper text-lg">{`Post that has ${tag}, total count is ${posts.length}`}</div>
        {posts.map(({ node }) => (
          <PostCard node={node} />
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            slug
          }
          excerpt(truncate: true, pruneLength: 85)
          id
        }
      }
    }
  }
`;
