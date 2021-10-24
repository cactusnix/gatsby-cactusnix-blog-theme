const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// create slug for each posts md
exports.onCreateNode = async ({ node, getNode }) => {
  if (node.internal.type === "MarkdownRemark") {
    node.frontmatter.slug = `/posts${createFilePath({ node, getNode }).replace(
      / /g,
      ""
    )}`;
    // maybe some day I will use cover for post
    // node.frontmatter.cover = node.frontmatter.cover
    //   ? node.frontmatter.cover
    //   : "../assets/covers/defaultCover.png";
  }
};

// create page
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const posts = result.data.allMarkdownRemark.edges;
  const perPage = 10;
  const length = Math.ceil(posts.length / perPage);
  Array.from({ length: length }, (_, i) => {
    createPage({
      path: i === 0 ? "/" : `/page/${i + 1}`,
      component: path.resolve("./src/templates/posts.js"),
      context: {
        limit: perPage,
        skip: i * perPage,
        pageInfo: {
          prev:
            i === 0
              ? null
              : {
                  slug: i === 1 ? "/" : `/page/${i}`,
                  title: "Prev",
                },
          next:
            i === length - 1
              ? null
              : {
                  slug: `/page/${i + 2}`,
                  title: "Next",
                },
        },
      },
    });
  });
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve("./src/templates/post.js"),
      context: {
        id: node.id,
        pageInfo: {
          prev:
            index === posts.length - 1
              ? null
              : {
                  slug: posts[index + 1].node.frontmatter.slug,
                  title: posts[index + 1].node.frontmatter.title,
                },
          next:
            index === 0
              ? null
              : {
                  slug: posts[index - 1].node.frontmatter.slug,
                  title: posts[index - 1].node.frontmatter.title,
                },
        },
      },
    });
  });
};
