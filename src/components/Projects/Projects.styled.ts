import { Li, MainSection } from '@/styles/GlobalStyle';
import styled from 'styled-components';

export const ProjectsSection = styled(MainSection)``;

export const ProjectsDetails = styled.div``;

export const ProjectsList = styled.ul`
  list-style-type: none;
`;

export const ProjectsFeaturesList = styled.ul`
  list-style-type: none;
`;

export const ProjectsLi = styled(Li)`
  padding: 8px 0px;
`;

export const IframeContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;

  iframe {
    display: block;
    width: 100%;
    max-width: 375px;
    aspect-ratio: 375 / 812;
    height: auto;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;

  img {
    max-width: 100%;
    height: auto;
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
