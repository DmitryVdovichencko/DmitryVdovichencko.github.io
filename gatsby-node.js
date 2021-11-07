const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");
const { createRemoteFileNode } = require("gatsby-source-filesystem");


exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, printTypeDefinitions } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter @dontInfer {
      title: String!
			date: Date @dateformat(formatString: "DD-MM-YYYY")
			tags: [String!]!
			cover: File @fileByRelativePath
      embeddedImagesRemote: [File] @link(by: "url")
      embeddedImagesLocal: [File] @fileByRelativePath
    }
    `);

  // printTypeDefinitions({ path: "./typeDefs.txt" });
};

exports.onCreateNode = ({
  node,
  getNode,
  actions: { createNode, createNodeField },
  createNodeId,
  cache,
  store,
}) => {
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  };
	if (
    node.internal.type === 'Mdx' &&
    node.frontmatter &&
    node.frontmatter.embeddedImagesRemote
  ) {
    return Promise.all(
      node.frontmatter.embeddedImagesRemote.map((url) => {
        try {
          return createRemoteFileNode({
            url,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store
          });
        } catch (error) {
          console.error(error);
        }
      })
    );
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
							tags
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve("src/templates/Article.tsx"),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
	const tagTemplate = path.resolve("src/templates/Tags.tsx")
	    // Tag pages:
    const tags = [
      ...new Set(
        posts.reduce(
          (tagsList, edge) =>
					_.get(edge, "node.frontmatter.tags")
              ? [...tagsList, ..._.get(edge, "node.frontmatter.tags")]
              : tagsList,
          []
        )
      ),
    ];
    // Make tag pages
    tags.forEach((tag) => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
};

