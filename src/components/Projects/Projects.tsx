import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import {
  IframeContainer,
  ImgContainer,
  ProjectContainer,
  ProjectsDetails,
  ProjectsFeaturesList,
  ProjectsLi,
  ProjectsList,
  ProjectsSection,
  ProjectsTitle,
} from './Projects.styled';
import type { Project, ProjectMedia, ProjectTextContent, ProjectsText } from '@/interfaces/Text';
import { Details, Li, Link, Paragraph, SectionSubtitle, Summary } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import { Modal } from '../Modal/Modal';
import { ProjectsTexts } from '@/constants/texts_EN';

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ProjectsSection id="projects">
      <SectionSubtitle fontWeight={theme.fontWeight.light}>{texts.title}</SectionSubtitle>
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ProjectsTexts.detailsLabel}
      >
        {selectedProject && (
          <>
            <ProjectsDetails>
              <Paragraph>{renderProjectContent(selectedProject.description)}</Paragraph>
              {Boolean(selectedProject.details?.length || selectedProject.media) && (
                <Details>
                  <Summary>{selectedProject.detailsTitle ?? texts.detailsLabel}</Summary>
                  {selectedProject.detailsDescription && (
                    <Paragraph>{selectedProject.detailsDescription}</Paragraph>
                  )}
                  {selectedProject.details && selectedProject.details.length > 0 && (
                    <ProjectsFeaturesList>
                      {selectedProject.details.map((detail, index) => (
                        <Li key={`${selectedProject.title}-${index}`}>
                          - {renderProjectContent(detail)}
                        </Li>
                      ))}
                    </ProjectsFeaturesList>
                  )}
                </Details>
              )}
            </ProjectsDetails>
          </>
        )}
      </Modal>
      <ProjectsList>
        {texts.projects.map((project) => (
          <ProjectContainer
            key={project.title}
            as="button"
            type="button"
            onClick={() => setSelectedProject(project)}
          >
            <ProjectsLi>
              <ProjectsTitle>{project.title}</ProjectsTitle>
              {project.media && renderProjectMedia(project.media)}
            </ProjectsLi>
          </ProjectContainer>
        ))}
      </ProjectsList>
    </ProjectsSection>
  );
};

export default Projects;
