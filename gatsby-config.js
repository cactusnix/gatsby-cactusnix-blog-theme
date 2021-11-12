module.exports = {
  siteMetadata: {
    siteUrl: "https://cactusnix.github.io",
    title: "Cactusnix's Blog",
    description: "Think different, and do something different.",
    avatarURL: "./images/avatar.png",
    since: "2017",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Archive",
        link: "/archive",
      },
      {
        name: "Tags",
        link: "/tags",
      },
      {
        name: "Projects",
        link: "/posts/projects",
      },
      {
        name: "About",
        link: "/posts/about",
      },
    ],
    socialLinks: [
      {
        name: "twitter",
        link: "/twitter",
      },
      {
        name: "github",
        link: "/github",
      },
      {
        name: "jike",
        link: "/jike",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-images", "gatsby-remark-highlight-code"],
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
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
