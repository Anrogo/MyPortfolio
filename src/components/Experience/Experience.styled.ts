import { MainSection, Paragraph } from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const ExperienceSection = styled(MainSection)`
`;

export const ExperienceList = styled.ul`
  list-style: none;
  list-style-position: outside;
  margin-bottom: 16px;
`;

export const ExperienceListDetail = styled.li`

`;

export const ExperienceParagraph = styled(Paragraph)`
  padding-left: ${theme.spacing.md};
`;
