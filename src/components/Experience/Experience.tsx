import {
  ExperienceList,
  ExperienceListDetail,
  ExperienceParagraph,
  ExperienceSection,
} from './Experience.styled';
import type { ExperienceText } from '@/interfaces/Text';
import { Description, Li, Link, Paragraph, Subtitle, Summary } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

const Experience = ({ texts }: { texts: ExperienceText }) => {
  return (
    <ExperienceSection id="experience">
      <Subtitle fontWeight={theme.fontWeight.light}>{texts.title}</Subtitle>
      <ExperienceList>
        {texts.jobs.map((job) => (
          <ExperienceListDetail key={job.dates}>
            <Description>{job.dates}</Description>
            <br />
            <ExperienceParagraph>
              <Paragraph>
                {job.linkDescription ? (
                  <>
                    {job.linkDescription.before}
                    <Link href={job.linkDescription.linkHref} target="_blank" rel="noreferrer">
                      {job.linkDescription.linkText}
                    </Link>
                    {job.linkDescription.after}
                  </>
                ) : (
                  job.description
                )}
              </Paragraph>
              {job.details && job.details.length > 0 && (
                <details>
                  <Summary>{job.detailsTitle}</Summary>
                  <ExperienceList>
                    {job.details.map((detail) => (
                      <Li key={detail}>- {detail}</Li>
                    ))}
                  </ExperienceList>
                </details>
              )}
            </ExperienceParagraph>
          </ExperienceListDetail>
        ))}
      </ExperienceList>
    </ExperienceSection>
  );
};

export default Experience;
