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
    <div className="w-screen h-10 flex justify-center items-center text-xs lg:text-sm text-content-100 dark:text-content-100-dark bg-block-100 dark:bg-block-100-dark">
      <div>
        Copyright &copy; {since} - {new Date().getFullYear()}&nbsp;
      </div>
      <i
        className="w-3.5 lg:w-4 fill-current text-content-100 dark:text-content-100-dark "
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
          href="https://github.com/cactusnix/gatsby-theme-nix-blog"
        >
          Nix
        </a>
      </div>
    </div>
  );
}
