import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function Navigation() {
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
    <div className="w-screen flex items-center justify-center h-12 text-content-300 dark:text-content-300-dark bg-block-100 dark:bg-block-100-dark">
      <div className="font-medium">
        <Link to="/">{title}</Link>
      </div>
      <div className="text-sm hidden font-light lg:block">
        {menuLinks.map((it) => {
          return (
            <Link key={it.link} className="ml-16" to={it.link}>
              {it.name}
            </Link>
          );
        })}
        <i className="inline-block ml-16 w-5" data-eva="search" />
      </div>
    </div>
  );
}
