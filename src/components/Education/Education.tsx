import { EducationList, EducationListDetail, EducationSection } from './Education.styled';
import type { EducationText } from '@/interfaces/Text';
import { Description, SectionSubtitle, Text } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

const Education = ({ texts }: { texts: EducationText }) => {
  return (
    <EducationSection id="education">
      <SectionSubtitle fontWeight={theme.fontWeight.light}>{texts.title}</SectionSubtitle>
      <EducationList>
        {texts.education.map((education) => (
          <EducationListDetail key={education.dates}>
            <Description>{education.dates}</Description>
            <Text> {education.description}</Text>
          </EducationListDetail>
        ))}
      </EducationList>
    </EducationSection>
  );
};

export default Education;
