import { CoursesList, CoursesListDetail, CoursesSection } from './Courses.styled';
import type { CourseText } from '@/interfaces/Text';
import { Description, SectionSubtitle, Text } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

const Courses = ({ texts }: { texts: CourseText }) => {
  return (
    <CoursesSection id="Courses">
      <SectionSubtitle fontWeight={theme.fontWeight.light}>{texts.title}</SectionSubtitle>
      <CoursesList>
        {texts.courses.map((Course) => (
          <CoursesListDetail key={Course.description}>
            <Description>{Course.date}. </Description>
            <Text> {Course.description}.</Text>
          </CoursesListDetail>
        ))}
      </CoursesList>
    </CoursesSection>
  );
};

export default Courses;
