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
    <div className="w-screen bg-gray-50 px-7 py-4 flex justify-between items-center">
      <div className="text-2xl font-medium">
        <Link to="/">{title}</Link>
      </div>
      <div className="text-base">
        {menuLinks.map((it) => {
          return (
            <Link className="ml-5" to={it.link}>
              {it.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
