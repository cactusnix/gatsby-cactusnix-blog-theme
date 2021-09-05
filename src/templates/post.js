import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Post({ data }) {
  const { html } = data.markdownRemark;
  console.log(data);
  return (
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
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
