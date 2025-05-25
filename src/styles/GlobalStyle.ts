import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${theme.colors.blue3};
    color: ${theme.colors.white};
    scroll-behavior: smooth;
  }
`;

interface TextsProps {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  lineHeight?: number;
}

export const Title = styled.span<TextsProps>`
  font-size: ${(props) => props.fontSize ? props.fontSize : theme.fontSize.jumbo25};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : theme.fontWeight.bold};
  color: ${(props) => props.color ? props.color : theme.colors.white};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : theme.fontSize.jumbo25};
`;

export const Subtitle = styled.span<TextsProps>`
  font-size: ${(props) => props.fontSize ? props.fontSize : theme.fontSize.jumbo};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : theme.fontWeight.bold};
  color: ${(props) => props.color ? props.color : theme.colors.white};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : theme.fontSize.jumbo};
`;

export const Description = styled.span<TextsProps>`
  font-size: ${(props) => props.fontSize ? props.fontSize : theme.fontSize.lg};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : theme.fontWeight.medium};
  color: ${(props) => props.color ? props.color : theme.colors.white};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : theme.fontSize.lg};
`;

export const Text = styled.span<TextsProps>`
  font-size: ${(props) => props.fontSize ? props.fontSize : theme.fontSize.md};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : theme.fontWeight.light};
  color: ${(props) => props.color ? props.color : theme.colors.white};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : theme.fontSize.md};
`; 