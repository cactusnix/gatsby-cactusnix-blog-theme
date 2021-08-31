import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Bio() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);
  const { description } = data.site.siteMetadata;
  return (
    <div>
      <div>{description}</div>
    </div>
  );
}
