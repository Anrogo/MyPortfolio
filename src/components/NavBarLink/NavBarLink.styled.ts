import { theme } from "@/styles/theme";
import styled from "styled-components";

export const NavBarLinkContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 0;
  padding: 0;
`;

export const NavBarLinkItem = styled.li`
  margin: 0;
`;

export const NavBarLinkAnchor = styled.a`
  text-decoration: none;
  color: ${theme.colors.blue4};
  font-weight: ${theme.fontWeight.medium};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.blue2};
  }
`;