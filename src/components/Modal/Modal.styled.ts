import styled from "styled-components";
import { theme } from "@/styles/theme";
import { SectionSubtitle } from "@/styles/GlobalStyle";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;    
  justify-content: center;
  align-items: center;
  max-width: 60vh;
  max-height: 90vh;
  overflow-y: auto;
  overscroll-behavior: contain;
  background-color: ${({ theme }) => theme.project.detailBackground};
  padding: 0px 24px 24px;
  margin: 32px;
  gap: 16px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.project.detailBorder};
  box-shadow: ${({ theme }) => theme.shadows.panel};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 8px 0;
  margin-bottom: -16px;
`;

export const ModalSectionTitle = styled(SectionSubtitle)`
  font-size: ${theme.fontSize.md};
  width: 100%;
  display: flex;
  justify-content: start;
`;

export const ModalCloseButton = styled.button`
  display: grid;
  place-items: center;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.blue4};
  font: inherit;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  transition:
    background-color 160ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.project.detailBorder};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.blue4};
    outline-offset: 2px;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.project.detailBorder};
`;