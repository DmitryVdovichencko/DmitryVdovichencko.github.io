import * as React from "react";
import { AiOutlineGithub, AiOutlineCaretRight } from "react-icons/ai";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/layout/";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
} from "../components/ui/Card";
import { projects } from "../content/projects/projects";
import LinkButton from "../components/ui/LinkButton";
import { IGatsbyImageData } from "gatsby-plugin-image";
import SEO from "../components/Seo";
interface ImageData {
  fixed: {
    originalName: string;
  };
  gatsbyImageData: IGatsbyImageData;
}

interface ProjectsData extends PageProps {
  data: {
    allImageSharp: {
      nodes: Array<ImageData>;
    };
  };
}

const ProjectsPage: React.FC<ProjectsData> = (props) => {
  const { data } = props;
  return (
    <Layout>
			<SEO title="Projects | Dimetrio" />
      {projects.map(
        ({ title, description, tags, cover, srcUrl, demoUrl }, index) => {
          const image = data?.allImageSharp?.nodes?.filter(
            (img) => img?.fixed?.originalName === cover
          )[0];
          return (
            <Card key={`${title}_${index}`}>
              <CardImage title={title} data={image?.gatsbyImageData} />

              <CardContent>
                <CardHeader title={title} />
                <div className="flex flex-row flex-wrap items-baseline mt-4 mb-6">
                  {tags?.map((tag) => (
                    <div
                      className="mr-1 rounded bg-slate-200 py-1 px-2 text-stone-600 font-light text-sm"
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <CardDescription>{description}</CardDescription>

                <div className="flex flex-row flex-wrap w-full justify-start items-end py-2">
                  {srcUrl && (
                    <LinkButton
                      href={srcUrl}
                      title="Repository"
                      icon={<AiOutlineGithub size="1.5em" />}
                    />
                  )}
                  {demoUrl && (
                    <LinkButton
                      href={demoUrl}
                      title="Demo"
                      icon={<AiOutlineCaretRight size="1.5em" />}
                    />
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
