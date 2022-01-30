import * as React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
	AiOutlineCaretRight
} from "react-icons/ai";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/layout/";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardStaticImage,
} from "../components/ui/Card";
import { projects } from "../content/projects/projects";
import LinkButton from "../components/ui/LinkButton"

const ProjectsPage: React.FC<PageProps> = (props) => {
  const { data } = props;
  return (
    <Layout>
      {projects.map(
        ({ title, description, tags, cover, srcUrl, demoUrl }, index) => {
          const image = data?.allImageSharp?.nodes?.filter(
            (img) => img?.fixed?.originalName === cover
          )[0];
          console.log({ image });
          return (
            <Card key={`${title}_${index}`}>
              <CardImage title={title} data={image?.gatsbyImageData} />

              <CardContent>
                <CardHeader title={title} />
                <div className="flex flex-row flex-wrap items-baseline mt-4 mb-6">
                  {tags?.map((tag) => (
                    <div key={tag}>{tag}</div>
                  ))}
                </div>
                <CardDescription>{description}</CardDescription>

                <div className="flex flex-row flex-wrap w-full justify-start items-end p-2">
                  {srcUrl && (
										<LinkButton href={srcUrl} title="Repository" icon={<AiOutlineGithub size="1.5em" />} />
                  )}
                  {demoUrl && (
										<LinkButton href={demoUrl} title="Demo" icon={<AiOutlineCaretRight size="1.5em" />} />
                  )}
                </div>
              </CardContent>
            </Card>
          );
        }
      )}
    </Layout>
  );
};

export const query = graphql`
  query {
    allImageSharp {
      nodes {
        gatsbyImageData
        fixed {
          originalName
        }
      }
    }
  }
`;

export default ProjectsPage;
