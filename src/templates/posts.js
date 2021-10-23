import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Pagination from "../components/pagination";

export default function Posts({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {pageContext.skip === 0 && <Bio />}
      <div className="post-wrapper">
        {posts.map(({ node }) => {
          return (
            <Link
              key={node.id}
              to={node.frontmatter.slug}
              className="flex flex-col box-border shadow-md mt-8 h-72 lg:h-48 lg:flex-row text-content-200 dark:text-content-200-dark"
            >
              <GatsbyImage
                className="h-20 w-full lg:w-60 lg:h-auto lg:flex-shrink-0"
                layout="fullWidth"
                image={node.frontmatter.cover.childImageSharp.gatsbyImageData}
                alt="it's cover"
              />
              <div className="flex-1 py-6 lg:py-7 px-4 lg:px-8 bg-block-200 dark:bg-block-200-dark ">
                <div key={node.id} className="text-lg font-bold">
                  {node.frontmatter.title}
                </div>
                <div className="pt-1 pb-2 text-sm">{node.frontmatter.date}</div>
                <div className="font-light">{node.excerpt}</div>
              </div>
            </Link>
          );
        })}
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
            date(formatString: "MM,DD YYYY HH:mm")
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
    }
  }
`;
