import type { ReactNode } from 'react';
import Image from 'next/image';
import type { ProjectMedia, ProjectTextContent, ProjectsText } from '@/interfaces/Text';
import { Description, Details, Li, Link, Paragraph, Subtitle, Summary } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import {
  IframeContainer,
  ImgContainer,
  ProjectsDetails,
  ProjectsFeaturesList,
  ProjectsLi,
  ProjectsList,
  ProjectsSection,
} from './Projects.styled';

const renderProjectContent = (content: ProjectTextContent): ReactNode => {
  if (typeof content === 'string') {
    return content;
  }

  return (
    <>
      {content.before}
      <Link href={content.linkHref} target="_blank" rel="noreferrer">
        {content.linkText}
      </Link>
      {content.after}
    </>
  );
};

const renderProjectMedia = (media: ProjectMedia) => {
  if (media.type === 'iframe') {
    return (
      <IframeContainer>
        <iframe src={media.src} title={media.title} allowFullScreen />
      </IframeContainer>
    );
  }

  return (
    <ImgContainer>
      <Image
        className={media.className}
        src={media.src}
        width={media.width}
        height={media.height}
        alt={media.alt}
        unoptimized
      />
    </ImgContainer>
  );
};

const Projects = ({ texts }: { texts: ProjectsText }) => {
  return (
    <ProjectsSection id="projects">
      <Subtitle fontWeight={theme.fontWeight.light}>{texts.title}</Subtitle>
      <ProjectsList>
        {texts.projects.map((project) => (
          <ProjectsLi key={project.title}>
            <Description>{project.title}</Description>
            <ProjectsDetails>
              <Paragraph>{renderProjectContent(project.description)}</Paragraph>
              {Boolean(project.details?.length || project.media) && (
                <Details>
                  <Summary>{project.detailsTitle ?? texts.detailsLabel}</Summary>
                  {project.detailsDescription && (
                    <Paragraph>{project.detailsDescription}</Paragraph>
                  )}
                  {project.details && project.details.length > 0 && (
                    <ProjectsFeaturesList>
                      {project.details.map((detail, index) => (
                        <Li key={`${project.title}-${index}`}>- {renderProjectContent(detail)}</Li>
                      ))}
                    </ProjectsFeaturesList>
                  )}
                  {project.media && renderProjectMedia(project.media)}
                </Details>
              )}
            </ProjectsDetails>
          </ProjectsLi>
        ))}
      </ProjectsList>
    </ProjectsSection>
  );
};

export default Projects;
