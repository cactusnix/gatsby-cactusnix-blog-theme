import React from "react";
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
  return (
    <div
      className={classNames(
        "w-screen",
        "flex",
        "items-center",
        "justify-center",
        "h-14",
        "text-content-300",
        "dark:text-content-300-dark",
        "bg-block-100",
        "dark:bg-block-100-dark",
        "fixed",
        "z-10"
      )}
    >
      <i
        className="fill-current text-content-300 dark:text-content-300-dark absolute left-4 w-5 lg:hidden"
        data-eva="menu"
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
        <i
          className="fill-current text-content-300 dark:text-content-300-dark inline-block ml-24 w-5"
          data-eva="search"
        />
      </div>
    </div>
  );
}
