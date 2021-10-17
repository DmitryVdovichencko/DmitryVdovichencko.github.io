const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then((result) => {
    const posts = result.data.allMdx.edges;
    const ArticleTemplate = path.resolve("src/templates/Article.tsx");
    const TagTemplate = path.resolve("src/templates/Tags.tsx");
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: ArticleTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    });
    // Tag pages:
    const tags = [
      ...new Set(
        posts.reduce(
          (tagsList, edge) =>
					_.get(edge, "node.frontmatter.tags")
              ? [...tagsList, _.get(edge, "node.frontmatter.tags")]
              : tagsList,
          []
        )
      ),
    ];
    // Make tag pages
    tags.forEach((tag) => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: TagTemplate,
        context: {
          tag,
        },
      });
    });
  });
};
