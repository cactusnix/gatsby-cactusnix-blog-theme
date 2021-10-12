import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Pagination from "../components/pagination";

export default function Posts({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {pageContext.skip === 0 && <Bio />}
      <div className="display-wrapper">
        {posts.map(({ node }) => {
          return (
            <div
              key={node.id}
              className="box-border bg-white shadow-md overflow-hidden md:flex"
            >
              <GatsbyImage
                className="w-full md:w-60 md:flex-shrink-0"
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
    }
  }
`;
