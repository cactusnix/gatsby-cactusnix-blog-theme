import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Bio from "../components/bio";
import { GatsbyImage } from "gatsby-plugin-image";

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
      {!pageInfo.hasPreviousPage && <Bio />}
      <div className="min-h-screen max-w-screen-md my-16">
        {posts.map(({ node }) => {
          return (
            <div key={node.id} className="my-4 bg-white rounded-md shadow">
              <div>
                <GatsbyImage
                  image={node.frontmatter.cover.childImageSharp.gatsbyImageData}
                />
              </div>
              <div>
                <Link key={node.id} to={node.frontmatter.slug}>
                  {node.frontmatter.title}
                </Link>
                <div>{node.frontmatter.date}</div>
                <div>{node.excerpt}</div>
              </div>
            </div>
          );
        })}
        <div>
          {pageInfo.hasPreviousPage && <Link to={prevLink}>prev</Link>}
          {pageInfo.hasNextPage && <Link to={nextLink}>next</Link>}
        </div>
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
            slug
            cover {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
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
