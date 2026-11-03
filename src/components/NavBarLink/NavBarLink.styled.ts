import { theme } from "@/styles/theme";
import styled from "styled-components";

export const NavBarLinkContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0px;
  margin: 0;
  padding: 0;
`;

export const NavBarLinkItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;

  &:not(:last-child)::after {
    content: '·';
    margin: 0 16px;
    color: ${theme.colors.blue2};
    font-size: 24px;
    line-height: 1;
  }
`;

export const NavBarLinkAnchor = styled.a`
  text-decoration: none;
  color: ${theme.colors.blue4};
  font-weight: ${theme.fontWeight.medium};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.blue1};
  }
`;