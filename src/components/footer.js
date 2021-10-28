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
  // TODO fix use tailwind
  const darkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return (
    <div className="w-screen h-10 flex justify-center items-center text-xs lg:text-sm text-content-100 dark:text-content-100-dark bg-block-100 dark:bg-block-100-dark">
      <div>
        Copyright &copy; {since} - {new Date().getFullYear()}&nbsp;
      </div>
      {/* TODO fix use tailwind */}
      <i
        className="w-3.5 lg:w-4"
        data-eva="heart"
        data-eva-animation="pulse"
        data-eva-hover="false"
        data-eva-infinite="true"
        data-eva-fill={darkMode ? "#6e6e73" : "#86868b"}
      />
      &nbsp;
      <div>
        Theme{" "}
        <a
          className="hover:underline text-link dark:text-link-dark"
          href="https://github.com/cactusnix/gatsby-cactusnix-blog-theme"
        >
          Nix
        </a>
      </div>
    </div>
  );
}
