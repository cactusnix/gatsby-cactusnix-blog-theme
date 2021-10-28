import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default function Archive() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              year: date(formatString: "YYYY")
              publishTime: date(formatString: "MMM DD, HH:mm")
              title
              slug
            }
          }
        }
      }
    }
  `);
  const nodes = data.allMarkdownRemark.edges;
  let result = [];
  nodes.forEach(({ node }) => {
    const index = result.findIndex((it) => it.year === node.frontmatter.year);
    const item = {
      title: node.frontmatter.title,
      publishTime: node.frontmatter.publishTime,
      slug: node.frontmatter.slug,
    };
    if (index > -1) {
      result[index].list.push(item);
    } else {
      result.push({
        year: node.frontmatter.year,
        list: [item],
      });
    }
  });
  return (
    <Layout>
      <div
        className="base-wrapper card-wrapper shadow-md mt-20 mb-10 
        divide-y-2 di divide-solid"
      >
        {result.map((it) => {
          return (
            <div>
              <div>{it.year} Year</div>
              {it.list.map((temp) => {
                return (
                  <div className="flex justify-between">
                    <Link to={temp.slug}>{temp.title}</Link>
                    <div>{temp.publishTime}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
