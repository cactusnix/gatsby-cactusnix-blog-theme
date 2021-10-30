import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import classNames from "classnames";

export default function Navigation(props) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
          title
        }
      }
    }
  `);
  const { title, menuLinks = [] } = data.site.siteMetadata;
  // TODO use tailwind to replace this way
  const darkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return (
    <div
      className={classNames(
        "w-screen",
        "flex",
        "items-center",
        "justify-center",
        "h-12",
        "text-content-300",
        "dark:text-content-300-dark",
        "bg-block-100",
        "dark:bg-block-100-dark",
        "fixed",
        "z-10"
      )}
    >
      {/* TODO use tailwind */}
      <i
        className="absolute left-4 w-5 lg:hidden"
        data-eva="menu"
        data-eva-fill={darkMode ? "#f5f5f7" : "#000000"}
      />
      <div className="font-medium">
        <Link to="/">{title}</Link>
      </div>
      <div className="text-sm hidden font-light lg:block">
        {menuLinks.map((it) => {
          return (
            <Link key={it.link} className="ml-24" to={it.link}>
              {it.name}
            </Link>
          );
        })}
        {/* TODO use tailwind */}
        <i
          className="inline-block ml-24 w-5"
          data-eva="search"
          data-eva-fill={darkMode ? "#f5f5f7" : "#000000"}
        />
      </div>
    </div>
  );
}
