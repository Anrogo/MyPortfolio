import { styled } from 'styled-components';
import { theme } from '@/styles/theme';
import { Link } from '@/styles/GlobalStyle';

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
    color: ${({ theme }) => theme.colors.blue2};
    font-size: 24px;
    line-height: 1;
  }

  @media (max-width: 768px) {
    font-size: ${theme.fontSize.md};
    &:not(:last-child)::after {
      margin: 0 12px;
    }
  }

  @media (max-width: 500px) {
    font-size: ${theme.fontSize.sm};

    &:not(:last-child)::after {
      margin: 0 4px;
    }
  }
`;

export const NavBarLinkAnchor = styled(Link)`
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;
