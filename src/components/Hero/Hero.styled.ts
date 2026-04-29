import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const HeroSection = styled.section`
  /* height: 100vh; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${theme.spacing.xxl};
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  padding: 0px 36px;
`;
