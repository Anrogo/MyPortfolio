import { styled } from 'styled-components';

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
    padding-right: 16px;
  }

  @media (max-width: 500px) {
    width: 85%;
    padding-right: 8px;
  }
`;

export const ArrowUpButton = styled.button<{ $isVisible: boolean; $hoverEnabled: boolean }>`
  background-color: ${({ theme }) => theme.colors.blue2};
  color: ${({ theme }) => theme.colors.blue0};
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  padding: 0;
  display: grid;
  place-items: center;
  font-size: 24px;
  cursor: pointer;
  opacity: ${(props) => (props.$isVisible ? '1' : '0')};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    background-color 0.3s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ $hoverEnabled, theme }) =>
        $hoverEnabled ? theme.hoverColor : theme.colors.blue2};
      color: ${({ theme }) => theme.colors.blue0};
    }
  }

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 500px) {
    width: 32px;
    height: 32px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
