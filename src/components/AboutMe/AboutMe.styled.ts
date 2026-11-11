import { styled } from 'styled-components';
import { Description, MainSection } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

export const AboutMeSection = styled(MainSection)``;

export const AboutMeDescription = styled(Description)`
  padding: ${theme.spacing.giant};

  @media (max-width: 768px) {
    padding: ${theme.spacing.md};
  }
`;
