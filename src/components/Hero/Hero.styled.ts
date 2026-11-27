import NextImage from 'next/image';
import { styled } from 'styled-components';
import { SectionSubtitle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px -4px;
  padding: 8px;
  border-radius: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.md};

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
  flex: 0 0 auto;
  width: clamp(80px, 25vw, 125px);
  height: clamp(80px, 25vw, 125px);
  overflow: hidden;
  border-radius: 50%;
  margin: ${theme.spacing.sm};
`;

export const ProfileImage = styled(NextImage)`
  object-fit: cover;
  object-position: center 30%;
`;

export const HeroSubtitle = styled(SectionSubtitle)`
  font-style: italic;
  font-size: ${theme.fontSize.xl};

  @media screen and (max-width: 768px) {
    font-size: ${theme.fontSize.lg};
  }

  @media screen and (max-width: 500px) {
    font-size: ${theme.fontSize.md};
  }
`;
