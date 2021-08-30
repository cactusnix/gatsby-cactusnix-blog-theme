module.exports = {
  siteMetadata: {
    siteUrl: "https://cactusnix.github.io",
    title: "Cactusnix's Blog",
    description: "Think different, and do something different.",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about",
        link: "/about",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/contents/posts/`,
      },
    },
  ],
};
