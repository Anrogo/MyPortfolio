import { keyframes, styled } from 'styled-components';

export const SiteConfigurationContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const SiteConfigurationContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 100%;
`;

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const flagEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding-bottom: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;

  img {
    display: block;
    animation: ${appear} 800ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  img.flag {
    animation: ${flagEnter} 600ms ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    img,
    img.flag {
      animation: none;
    }
  }
`;
