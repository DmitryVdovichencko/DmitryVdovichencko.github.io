import * as React from "react"
import Layout from "../components/layout"
// Components
import { Link, graphql } from "gatsby"
import PostDate from "../components/ui/PostDate"
import Tag from "../components/ui/Tag"
import SEO from "../components/Seo"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with ${tag}:`
	const isTitleCyrillic = (title) => /[aА-яЯ]/gm.test(title);
  return (
    <Layout>
			<SEO title="Article Tags | Dimetrio"/>
			<div className="flex flex-row content-center text-gray-500" >
				<span className="my-none vertical-middle">{tagHeader}</span>
			</div>

      <div>
        {edges.map(({ node, index }) => {
          return (
            <div key={index} className="my-8">
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
              <PostDate date={
                  isTitleCyrillic(node.frontmatter.title)
                    ? node.frontmatter.dateRu
                    : node.frontmatter.dateEn
                } />
            </div>
          )
        })}

        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
						dateRu: date(formatString: "DD MMMM, YYYY", locale: "ru")
            dateEn: date(formatString: "DD MMMM, YYYY", locale: "en")
            tags
          }
          excerpt
        }
      }
    }
  }
`