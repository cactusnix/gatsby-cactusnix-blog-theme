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
    <div className="w-screen h-14 bg-gray-50 px-4 lg:px-10 flex justify-between items-center">
      <div className="text-base lg:text-xl">
        <Link to="/">{title}</Link>
      </div>
      <div className="text-base hidden lg:block">
        {menuLinks.map((it) => {
          return (
            <Link key={it.link} className="ml-16 hover:underline" to={it.link}>
              {it.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
