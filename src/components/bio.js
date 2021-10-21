import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Bio() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          socialLinks {
            link
            name
          }
        }
      }
      jike: file(relativePath: { eq: "jike.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      mail: file(relativePath: { eq: "mail.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const { description, socialLinks } = data.site.siteMetadata;
  return (
    <>
      <div className="w-screen bio flex flex-col justify-center items-center">
        {data.avatar && (
          <GatsbyImage
            className="w-14 md:w-16"
            image={data.avatar.childImageSharp.gatsbyImageData}
            layout="fullWidth"
            alt="avatar"
          />
        )}
        <div className="md:text-2xl font-bold py-10 text-center">
          {description}
        </div>
        {socialLinks.length > 0 && (
          <div>
            {socialLinks.map((it) => {
              return data[it.name] && data[it.name] ? (
                <GatsbyImage
                  key={it.name}
                  className="w-6 box-border mx-2"
                  imgClassName="rounded-xl"
                  image={data[it.name].childImageSharp.gatsbyImageData}
                  layout="fullWidth"
                  alt={it.name}
                />
              ) : null;
            })}
          </div>
        )}
      </div>
    </>
  );
}
