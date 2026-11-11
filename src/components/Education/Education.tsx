import { EducationList, EducationListDetail, EducationSection } from './Education.styled';
import type { EducationText } from '@/interfaces/Text';
import { Description, Subtitle, Text } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

const Education = ({ texts }: { texts: EducationText }) => {
  return (
    <EducationSection id="education">
      <Subtitle fontWeight={theme.fontWeight.light}>{texts.title}</Subtitle>
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
