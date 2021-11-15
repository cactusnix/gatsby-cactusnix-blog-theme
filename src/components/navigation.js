import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useTransition, animated } from "react-spring";
import classNames from "classnames";

export default function Navigation(props) {
  const { eva } = props;
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
  const [menuVisible, setMenuVisible] = useState(false);
  const transition = useTransition(menuVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onStart: () => eva.replace(),
  });
  const renderMenu = (menuLinks, type) => {
    return menuLinks
      .filter((it) => (type === "Web" ? it.link !== "/" : true))
      .map((it, index) => {
        return (
          <Link
            key={it.link}
            className={classNames({
              "ml-24": type === "Web",
              "mb-8": type === "Mobile" && index !== menuLinks.length - 1,
              "hover:underline": type === "Mobile",
            })}
            to={it.link}
          >
            {it.name}
          </Link>
        );
      });
  };
  return (
    <>
      <div
        className="w-screen flex items-center justify-center h-14 
          text-content-300 dark:text-content-300-dark
          bg-block-100 dark:bg-block-100-dark fixed z-10"
      >
        <div
          onClick={() => setMenuVisible(true)}
          className="absolute left-4 w-5 h-5 lg:hidden cursor-pointer"
        >
          <i
            className="fill-current text-content-300 dark:text-content-300-dark"
            data-eva="menu"
          />
        </div>
        <div className="font-medium">
          <Link to="/">{title}</Link>
        </div>
        <div className="text-sm hidden font-light lg:block">
          {renderMenu(menuLinks, "Web")}
        </div>
        <div
          className="w-5 h-5 cursor-pointer absolute right-4 lg:relative lg:right-4 lg:inline-block lg:ml-24"
          onClick={() => alert("click search")}
        >
          <i
            className="fill-current text-content-300 dark:text-content-300-dark"
            data-eva="search"
          />
        </div>
      </div>
      {transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="fixed h-screen w-screen z-20 lg:hidden
                text-content-300 dark:text-content-300-dark bg-block-100 dark:bg-block-100-dark
                flex items-center justify-center"
            >
              <div
                className="absolute left-4 top-4 w-5 h-5 cursor-pointer z-20"
                onClick={() => setMenuVisible(false)}
              >
                <i
                  className="fill-current text-content-300 dark:text-content-300-dark"
                  data-eva="close"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                {renderMenu(menuLinks, "Mobile")}
              </div>
            </animated.div>
          )
      )}
    </>
  );
}
