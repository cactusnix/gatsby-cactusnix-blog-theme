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
      <div className="min-h-screen max-w-screen-md my-16 px-4">
        {posts.map(({ node }) => {
          return (
            <div
              key={node.id}
              className="my-10 box-border bg-white rounded-xl shadow-md overflow-hidden md:flex"
            >
              <GatsbyImage
                className="w-full md:w-60 md:flex-shrink-0"
                imgClassName="rounded-t-xl md:rounded-bl-xl md:rounded-tr-none"
                layout="fullWidth"
                image={node.frontmatter.cover.childImageSharp.gatsbyImageData}
                alt="it's cover"
              />
              <div className="flex flex-col justify-center py-8 px-10">
                <Link
                  key={node.id}
                  to={node.frontmatter.slug}
                  className="text-lg font-bold hover:underline"
                >
                  {node.frontmatter.title}
                </Link>
                <div className="text-sm">{node.frontmatter.date}</div>
                <div className="pt-2">{node.excerpt}</div>
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
            date(formatString: "MM-DD/YYYY HH:mm")
            slug
            cover {
              childImageSharp {
                gatsbyImageData
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
