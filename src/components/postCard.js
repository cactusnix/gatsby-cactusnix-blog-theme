import React from "react";
import { Link } from "gatsby";

export default function PostCard({ node }) {
  return (
    <Link
      key={node.id}
      to={node.frontmatter.slug}
      className="card-wrapper flex flex-col
        transition duration-500 ease-in-out transform hover:scale-105"
    >
      {/* maybe someday I will use it for cover function */}
      {/* <GatsbyImage
        className="w-full lg:w-72"
        layout="fullWidth"
        image={node.frontmatter.cover.childImageSharp.gatsbyImageData}
        alt="it's cover"
      /> */}
      <div className="text-xs text-content-300 dark:text-content-300-dark">
        {node.frontmatter.date}
      </div>
      <div key={node.id} className="pt-1 pb-2 text-xl font-bold">
        {node.frontmatter.title}
      </div>
      <div className="font-light">{node.excerpt}</div>
    </Link>
  );
}
