import { colors } from "@/constants/colors";
import styled from "styled-components";

export const SiteConfigurationContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 160px;
  height: 56px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 8px;
`;

export const SiteConfigurationContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blue2};
  min-width: 120px;
  height: 100%;
`;

export const ToggleButton = styled.button`
  background-color: ${colors.blue2};
  color: ${colors.white};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    border-color: 1px solid ${colors.blue3};
  }
`;

export const LanguageSelect = styled.select`
  background-color: ${colors.blue2};
  color: ${colors.white};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    border-color: 1px solid ${colors.blue3};
  }
`;

export const LanguageOption = styled.option`
  background-color: ${colors.blue2};
  color: ${colors.white};
  cursor: pointer;
`;

