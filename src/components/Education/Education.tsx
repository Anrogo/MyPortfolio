import { Description, Subtitle, Text } from '@/styles/GlobalStyle';
import { EducationList, EducationListDetail, EducationSection } from './Education.styled';
import { theme } from '@/styles/theme';
import { EducationTexts } from '@/constants/texts';

const Education = () => {
  return (
    <EducationSection id="education">
      <Subtitle fontWeight={theme.fontWeight.light}>{EducationTexts.title}</Subtitle>
      <EducationList>
        {EducationTexts.education.map((education) => (
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
