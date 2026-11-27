import { styled } from 'styled-components';
import { Description, Li, MainSection } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

export const ProjectsSection = styled(MainSection)`
  width: 100%;
  gap: 16px;
`;

export const ProjectsDetails = styled.div`

`;

export const ProjectsList = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, max(200px, calc((100% - 48px) / 4))), 1fr)
  );
  gap: 16px;
  align-items: start;
`;

export const ProjectsFeaturesList = styled.ul`
  list-style-type: none;
`;

export const ProjectsLi = styled(Li)`
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 100%;
`;

export const ProjectsTitle = styled(Description)`
  width: 100%;
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  text-align: center;
  color: ${({ theme }) => theme.project.cardText};
`;

export const IframeContainer = styled.div`
  width: 100%;
  height: 240px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    display: block;
    width: auto;
    height: 100%;
    max-width: 100%;
    aspect-ratio: 375 / 812;
    border-radius: 16px;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 16px;
  }

  img.argamingImg {
    display: block;
    width: 100%;
    max-width: 600px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      max-width: 90%;
    }
    img.argamingImg {
      width: 90vw;
      max-width: 100%;
    }
  }
`;

export const ProjectContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 360px;
  min-width: 0;
  border-radius: 32px;
  padding: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.project.cardBackground};
`;

