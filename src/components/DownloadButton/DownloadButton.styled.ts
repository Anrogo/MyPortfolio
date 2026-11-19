import { styled } from 'styled-components';
import { Link } from '@/styles/GlobalStyle';

export const DownloadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const CvIcon = styled.span<{ $src: string }>`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.downloadBlue};
  mask: ${({ $src }) => `url("${$src}") center / contain no-repeat`};
  -webkit-mask: ${({ $src }) => `url("${$src}") center / contain no-repeat`};
  transition: background-color 0.3s ease;

  @media (max-width: 500px) {
    width: 24px;
    height: 24px;
  }
`;

export const CvButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 32px;
  color: ${({ theme }) => theme.colors.downloadBlue};
  border: 1px solid ${({ theme }) => theme.colors.downloadBlue};
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
    color: #fff;
    border-color: #fff;
  }

  &:hover ${CvIcon} {
    background-color: #fff;
  }

  @media (max-width: 500px) {
    padding: 0.25rem 0.5rem;
    gap: 0.25rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
};
`;