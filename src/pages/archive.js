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
              monthDay: date(formatString: "MM-DD")
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
      monthDay: node.frontmatter.monthDay,
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
      <div>
        {result.map((it) => {
          return (
            <div>
              {it.year}
              {it.list.map((temp) => {
                return (
                  <div>
                    <Link to={temp.slug}>{temp.title}</Link>
                    <div>{temp.monthDay}</div>
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
