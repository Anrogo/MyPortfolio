import { theme } from '@/styles/theme';
import styled from 'styled-components';
import NextImage from 'next/image';
import { Subtitle } from '@/styles/GlobalStyle';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  box-shadow: 0px 0px 6px -4px;
  padding: 8px;
  border-radius: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroSection = styled.section`
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${theme.spacing.sm};
`;

export const HeroTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  margin: ${theme.spacing.sm};
`;

export const HeroImgSection = styled.div`
  display: flex;
  position: relative;
  flex: 0 0 clamp(72px, 25vw, 100px);
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;
  margin: ${theme.spacing.sm};
`;

export const ProfileImage = styled(NextImage)`
  object-fit: cover;
  object-position: center 30%;
`;

export const HeroSubtitle = styled(Subtitle)`
  font-style: italic;
`;
