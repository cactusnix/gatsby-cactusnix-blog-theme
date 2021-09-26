import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ArrowSvg from "../svgs/arrow.svg";

export default function Bio() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);
  const { description } = data.site.siteMetadata;
  return (
    <>
      <div className="hidden w-screen bio md:flex flex-col justify-center items-center">
        <div>{description}</div>
        <ArrowSvg className="absolute bottom-1.5 animate-bounce" />
      </div>
      <div className="block md:hidden">
        <div>mobile card</div>
      </div>
    </>
  );
}
