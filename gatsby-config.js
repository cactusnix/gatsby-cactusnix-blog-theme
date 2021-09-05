module.exports = {
  siteMetadata: {
    siteUrl: "https://cactusnix.github.io",
    title: "Cactusnix's Blog",
    description: "Think different, and do something different.",
    since: "2017",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "archive",
        link: "/archive",
      },
      {
        name: "tags",
        link: "/tags",
      },
      {
        name: "about",
        link: "/about",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/blog/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "covers",
        path: `${__dirname}/blog/assets/covers/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/blog/assets/images/`,
      },
    },
  ],
};
