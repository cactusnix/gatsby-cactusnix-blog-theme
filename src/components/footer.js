import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          since
        }
      }
    }
  `);
  const { since } = data.site.siteMetadata;
  return (
    <div className="w-screen flex justify-center items-center">
      <div>
        Copyright &copy; {since} - {new Date().getFullYear()}&nbsp;
      </div>
      <div>
        Powered By <a href="https://www.gatsbyjs.com">Gatsby</a>&nbsp;
      </div>
      <div>
        Theme{" "}
        <a href="https://github.com/cactusnix/gatsby-cactusnix-blog-theme">
          Cactusnix
        </a>
      </div>
    </div>
  );
}
