import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default function Post({ data, pageContext }) {
  const { html } = data.markdownRemark;
  const { prev, next } = pageContext;
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <div>
        {prev && (
          <Link to={prev.frontmatter.slug}>{prev.frontmatter.title}</Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={next.frontmatter.slug}>{next.frontmatter.title}</Link>
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
