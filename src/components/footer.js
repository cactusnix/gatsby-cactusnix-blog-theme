import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
    <div className="w-screen flex justify-center items-center py-1 text-xs lg:text-sm text-content-100 dark:text-content-100-dark bg-block-100 dark:bg-block-100-dark">
      <div>
        Copyright &copy; {since} - {new Date().getFullYear()}&nbsp;
      </div>
      <i
        className="w-3.5 lg:w-4"
        data-eva="heart"
        data-eva-animation="pulse"
        data-eva-hover="false"
        data-eva-infinite="true"
      />
      &nbsp;
      <div>
        Theme{" "}
        <a
          className="hover:underline text-link dark:text-link-dark"
          href="https://github.com/cactusnix/gatsby-cactusnix-blog-theme"
        >
          Cactusnix
        </a>
      </div>
    </div>
  );
}
