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
      value: `/posts${value}`,
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
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/post.js"),
      context: { id: node.id },
    });
  });
};
