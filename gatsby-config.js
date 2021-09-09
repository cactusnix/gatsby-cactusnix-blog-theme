module.exports = {
  siteMetadata: {
    siteUrl: "https://cactusnix.github.io",
    title: "Cactusnix's Blog",
    description: "Think different, and do something different.",
    since: "2017",
    menuLinks: [
      {
        name: "home",
        link: "/blog",
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
        name: "projects",
        link: "/posts/projects",
      },
      {
        name: "about",
        link: "/posts/about",
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
        plugins: ["gatsby-remark-images"],
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
