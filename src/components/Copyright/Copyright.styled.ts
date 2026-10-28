import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const CopyrightSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  font-size: ${theme.fontSize.xl};

  @media (max-width: 768px) {
    font-size: ${theme.fontSize.md};
  }

  @media (max-width: 500px) {
    font-size: ${theme.fontSize.sm};
  }
`;
