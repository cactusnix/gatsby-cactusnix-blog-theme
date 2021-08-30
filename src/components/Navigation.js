import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Navigation() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const { title, description } = data.site.siteMetadata;
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}
