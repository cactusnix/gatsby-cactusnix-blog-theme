import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Pagination from "../components/pagination";

export default function Post({ data, pageContext }) {
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <div className="post-wrapper">
        <div className="bg-white shadow-md">
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <Pagination pageInfo={pageContext.pageInfo} />
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
