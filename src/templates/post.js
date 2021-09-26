import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default function Post({ data, pageContext }) {
  const { html } = data.markdownRemark;
  const { prev, next } = pageContext;
  return (
    <Layout>
      <div className="card-wrapper rounded-xl shadow-md">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
      <div className="pagination">
        {prev && (
          <Link to={prev.frontmatter.slug} className="pagination-btn prev">
            {prev.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={next.frontmatter.slug} className="pagination-btn next">
            {next.frontmatter.title}
          </Link>
        )}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`;
