import { Description, Li, Link, Paragraph, Subtitle, Summary } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import {
  ExperienceList,
  ExperienceListDetail,
  ExperienceParagraph,
  ExperienceSection,
} from './Experience.styled';
import { ExperienceTexts } from '@/constants/texts';

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Subtitle fontWeight={theme.fontWeight.light}>{ExperienceTexts.title}</Subtitle>
      <ExperienceList>
        {ExperienceTexts.jobs.map((job) => (
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
