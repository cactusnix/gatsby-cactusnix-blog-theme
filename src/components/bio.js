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
    <div className="w-screen bio flex justify-center items-center">
      <div>{description}</div>
    </div>
  );
}
