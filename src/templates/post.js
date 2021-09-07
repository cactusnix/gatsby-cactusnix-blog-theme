import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default function Post({ data, pageContext }) {
  const { html } = data.markdownRemark;
  console.log(pageContext);
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <div></div>
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
