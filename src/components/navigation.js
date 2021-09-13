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
    <div className="w-screen h-14 bg-gray-50 flex justify-between items-center">
      <div className="text-2xl font-medium">
        <Link to="/">{title}</Link>
      </div>
      <div className="text-base">
        {menuLinks.map((it) => {
          return (
            <Link
              key={it.link}
              className="lg:ml-16 md:ml-8 hover:text-8xl"
              to={it.link}
            >
              {it.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
