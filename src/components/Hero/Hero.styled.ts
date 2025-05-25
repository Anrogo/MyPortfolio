import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const HeroSection = styled.section`
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${theme.spacing.giant};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${theme.spacing.md};
`;
