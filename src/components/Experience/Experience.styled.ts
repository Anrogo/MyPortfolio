import { MainSection, Paragraph, Text } from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const ExperienceSection = styled(MainSection)`
`;

export const ExperienceList = styled.ul`
  list-style: none;
  list-style-position: outside;
  margin-bottom: 16px;
  font-size: ${theme.fontSize.md};
`;

export const ExperienceListDetail = styled.li`
  padding: 8px 0;
`;

export const ExperienceParagraph = styled(Paragraph)`
  
`;

export const ExperienceText = styled(Text)`
`;
