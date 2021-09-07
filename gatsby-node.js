const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// create slug for each posts md
exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode }).replaceAll(" ", "");
    const { createNodeField } = actions;
    createNodeField({
      name: "slug",
      node,
      value: `/blog/posts${value}`,
    });
  }
};

// create page
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
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
  Array.from({ length: Math.ceil(posts.length / perPage) }, (_, i) => {
    createPage({
      path: i === 0 ? "/blog" : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/posts.js"),
      context: {
        limit: perPage,
        skip: i * perPage,
        currentPage: i + 1,
      },
    });
  });
  posts.forEach(({ node }, index) => {
    const prev = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? : posts[index -1].node
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/post.js"),
      context: {
        id: node.id,
        prev: prev,
        next: next,
      },
    });
  });
};
