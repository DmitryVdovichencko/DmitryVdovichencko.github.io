import * as React from "react";
import { PageProps, graphql, Link } from "gatsby"
import Layout from "../components/layout/"

const isTitleCyrillic = (title) => (/[aА-яЯ]/gm.test(title));
const BlogPage: React.FC<PageProps> = ({data}) => {
  return (
   <Layout>
		<h2>Blog</h2>
		{data.allMdx.edges.map(({ node }, index) => (
      <div>
        <Link
          key={index}
          to={node.fields.slug}
        >{`${node.frontmatter.title}`}</Link>
        <p>{isTitleCyrillic(node.frontmatter.title) ? node.frontmatter.dateRu:node.frontmatter.dateEn}</p>
        <p>{node.excerpt}</p>
      </div>
    ))}
    </Layout>
  )
}

export default BlogPage
export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            dateRu: date(formatString: "DD MMMM, YYYY", locale:"ru")
            dateEn: date(formatString: "DD MMMM, YYYY", locale:"en")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`