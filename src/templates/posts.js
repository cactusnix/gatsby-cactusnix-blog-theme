import React from "react";
import { graphql, Link } from "gatsby";
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
              className="flex flex-col box-border shadow-md mt-6 lg:flex-row 
              text-content-200 dark:text-content-200-dark
              bg-block-200 dark:bg-block-200-dark
              transition duration-500 ease-in-out transform hover:scale-105"
            >
              {/* maybe someday I will use it for cover function */}
              {/* <GatsbyImage
                className="w-full lg:w-72"
                layout="fullWidth"
                image={node.frontmatter.cover.childImageSharp.gatsbyImageData}
                alt="it's cover"
              /> */}
              <div className="py-6 lg:py-7 px-4 lg:px-8">
                <div className="text-xs text-content-300 dark:text-content-300-dark">
                  {node.frontmatter.date}
                </div>
                <div key={node.id} className="pt-1 pb-2 text-xl font-bold">
                  {node.frontmatter.title}
                </div>
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
