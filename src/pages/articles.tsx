import * as React from "react";
import { PageProps, graphql, Link } from "gatsby";
import Layout from "../components/layout/";
import { ArticleList } from "../types/Articles";
import Tag from "../components/ui/Tag";
import PostDate from "../components/ui/PostDate";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
} from "../components/ui/Card";
import SEO from "../components/Seo";
const isTitleCyrillic = (title: string) => /[aА-яЯ]/gm.test(title);

interface BlogProps extends PageProps {
  data: ArticleList;
}

const BlogPage = (props: BlogProps): React.ReactElement => {
  const { data } = props;
  return (
    <Layout>
      <SEO title="Articles | Dimetrio" />
			<div className="flex flex-col gap-2">
      {data.allMdx.edges.map(({ node }, index) => (
				<Link key={`${node.fields.slug}_${index}`} to={node.fields.slug} className="flex flex-wrap justify-between items-center py-2 border-t border-gray-200">
				<p className="min-w-[300px]">{node.frontmatter.title}</p>
				            <PostDate
              date={
                isTitleCyrillic(node.frontmatter.title)
                  ? node.frontmatter.dateRu
                  : node.frontmatter.dateEn
              }
            />
						</Link>
        // <Card
				//  key={`${node.fields.slug}_${index}`} linkTo={node.fields.slug}>
        //   <CardImage
        //     title={node.frontmatter.title}
        //     data={node.frontmatter.cover}
        //   />
        //   <CardContent>
        //     <CardHeader title={`${node.frontmatter.title}`} />
        //     <PostDate
        //       date={
        //         isTitleCyrillic(node.frontmatter.title)
        //           ? node.frontmatter.dateRu
        //           : node.frontmatter.dateEn
        //       }
        //     />
        //     <div className="flex flex-row flex-wrap items-baseline mt-4 mb-6">
        //       {node.frontmatter.tags.map((tag) => (
        //         <div key={tag}>
        //           <Tag title={tag} />
        //         </div>
        //       ))}
        //     </div>
        //     <CardDescription>{node.excerpt}</CardDescription>
        //   </CardContent>
        // </Card>
      ))}
			</div>
    </Layout>
  );
};

export default BlogPage;
export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            cover {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, sizes: "300px")
              }
            }
            dateRu: date(formatString: "DD MMMM, YYYY", locale: "ru")
            dateEn: date(formatString: "DD MMMM, YYYY", locale: "en")
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
`;
