import { styled } from 'styled-components';
import { MainSection, Paragraph, Text } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

export const ExperienceSection = styled(MainSection)``;

export const ExperienceList = styled.ul`
  list-style: none;
  list-style-position: outside;
  margin-bottom: 16px;
  font-size: ${theme.fontSize.md};

  @media (max-width: 768px) {
    font-size: ${theme.fontSize.sm};
  }
`;

export const ExperienceListDetail = styled.li`
  padding: 8px 0;
`;

export const ExperienceTitle = styled.span`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
`;

export const ExperienceSubtitle = styled.span`
  font-size: ${theme.fontSize.sm};
  font-style: italic;
  padding-left: 8px;
`;

export const ExperienceParagraph = styled(Paragraph)`
  margin-top: 8px;
  margin-left: 0px;
`;

export const ExperienceText = styled(Text)``;
