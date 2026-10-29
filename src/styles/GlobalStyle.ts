import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { colors } from '@/constants/colors';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${theme.colors.blue1};
    background-image: url('/images/olivar.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: ${theme.colors.blue4};
    scroll-behavior: smooth;
  }
`;

const defaultColor = theme.colors.blue4;
interface TextsProps {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  lineHeight?: number;
  textAlign?: string;
}

export const Title = styled.span<TextsProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : theme.fontSize.jumbo25)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : theme.fontWeight.bold)};
  color: ${(props) => (props.color ? props.color : defaultColor)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : theme.lineHeight.jumbo25)};

  @media (max-width: 768px) {
    font-size: ${theme.fontSize.jumbo};
  }

  @media (max-width: 500px) {
    font-size: ${theme.fontSize.xl};
  }
`;

export const Subtitle = styled.span<TextsProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : theme.fontSize.jumbo)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : theme.fontWeight.bold)};
  color: ${(props) => (props.color ? props.color : defaultColor)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : theme.lineHeight.jumbo)};

  @media (max-width: 500px) {
    font-size: ${theme.fontSize.lg};
  }
`;

export const Description = styled.span<TextsProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : theme.fontSize.lg)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : theme.fontWeight.medium)};
  color: ${(props) => (props.color ? props.color : defaultColor)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : theme.lineHeight.xxl)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'justify')};

  @media (max-width: 500px) {
    font-size: ${theme.fontSize.sm};
  }
`;

export const Text = styled.span<TextsProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : theme.fontSize.md)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : theme.fontWeight.light)};
  color: ${(props) => (props.color ? props.color : defaultColor)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : theme.lineHeight.xl)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'justify')};

  @media (max-width: 500px) {
    font-size: ${theme.fontSize.xs};
  }
`;

export const Paragraph = styled(Text)`
  display: block;
  margin-top: 4px;
  margin-left: 8px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  padding: 40px;
  margin: 32px auto;
  background-color: ${theme.colors.blue0};
  border-radius: 16px;
  box-shadow: 0px 10px 15px -3px;

  @media (max-width: 768px) {
    width: 75%;
    padding: 16px;
  }

  @media (max-width: 500px) {
    width: 85%;
    padding: 8px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.spacing.xxl};
  gap: ${theme.spacing.sm};

  @media (max-width: 768px) {
    margin: ${theme.spacing.md};
  }
`;

export const Li = styled.li`
  @media (max-width: 500px) {
    font-size: ${theme.fontSize.xs};
  }
`;

export const Details = styled.details``;

export const Summary = styled.summary`
  cursor: pointer;
  color: ${colors.blue2};
  font-size: ${theme.fontSize.sm};
  padding: 4px 0px 4px 12px;

  @media (max-width: 500px) {
    font-size: ${theme.fontSize.xs};
  }
`;

export const Link = styled.a`
  color: ${colors.blue2};
  text-decoration: none;
`;
