import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Pagination from "../components/pagination";
import "gitalk/dist/gitalk.css";
import GitalkComponent from "gitalk/dist/gitalk-component";

export default function Post({ data, pageContext }) {
  const { html } = data.markdownRemark;
  const { date, title } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div className="base-wrapper">
        <div className="card-wrapper">
          <div className="text-2xl font-bold">{title}</div>
          <div className="pt-2 text-sm text-content-300 dark:text-content-300-dark">
            {date}
          </div>
          <div
            className="mt-2 mb-6 bg-content-200 dark:bg-content-200-dark"
            style={{ height: "1px" }}
          />
          <div
            className="prose dark:prose-light"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
        <Pagination pageInfo={pageContext.pageInfo} />
        <GitalkComponent />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
      }
    }
  }
`;
