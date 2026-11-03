import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ArrowUpContainer = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  width: 64%;
	display: flex;
  justify-content: flex-end;
  pointer-events: none;
  transform: translateX(-50%);

  button {
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    width: 75%;
  }

  @media (max-width: 500px) {
    width: 85%;
  }
`;

export const ArrowUpButton = styled.button<{ isVisible: boolean }>`
  background-color: ${theme.colors.blue2};
  color: ${theme.colors.blue0};
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 24px;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: ${theme.colors.blue1};
    color: ${theme.colors.blue0};
  }
`;