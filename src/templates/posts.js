import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Bio from "../components/bio";

export default function Posts({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges;
  const pageInfo = data.allMarkdownRemark.pageInfo;
  const prevLink =
    pageContext.currentPage - 1 === 1
      ? "/"
      : `/page/${pageContext.currentPage - 1}`;
  const nextLink = `/page/${pageContext.currentPage + 1}`;
  return (
    <Layout>
      <Bio />
      <div className="min-h-screen">
        {posts.map(({ node }) => {
          return (
            <Link key={node.id} to={node.fields.slug}>
              <div>{node.frontmatter.title}</div>
              <div>{node.frontmatter.date}</div>
              <div>{node.excerpt}</div>
            </Link>
          );
        })}
      </div>
      <div>
        {pageInfo.hasPreviousPage && <Link to={prevLink}>prev</Link>}
        {pageInfo.hasNextPage && <Link to={nextLink}>next</Link>}
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
            date
          }
          fields {
            slug
          }
          excerpt
          id
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;
