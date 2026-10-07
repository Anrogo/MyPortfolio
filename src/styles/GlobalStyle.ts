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
  font-size: ${(props) => props.fontSize ? props.fontSize : theme.fontSize.jumbo25};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : theme.fontWeight.bold};
  color: ${(props) => props.color ? props.color : defaultColor};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : theme.lineHeight.jumbo25};
`;

export const Subtitle = styled.span<TextsProps>`
  font-size: ${(props) => props.fontSize ? props.fontSize : theme.fontSize.jumbo};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : theme.fontWeight.bold};
  color: ${(props) => props.color ? props.color : defaultColor};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : theme.lineHeight.jumbo};
`;

export const Description = styled.span<TextsProps>`
  font-size: ${(props) => props.fontSize ? props.fontSize : theme.fontSize.lg};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : theme.fontWeight.medium};
  color: ${(props) => props.color ? props.color : defaultColor};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : theme.lineHeight.xxl};
  text-align: ${(props) => props.textAlign ? props.textAlign : 'justify'};
`;

export const Text = styled.span<TextsProps>`
  font-size: ${(props) => props.fontSize ? props.fontSize : theme.fontSize.md};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : theme.fontWeight.light};
  color: ${(props) => props.color ? props.color : defaultColor};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : theme.lineHeight.xl};
  text-align: ${(props) => props.textAlign ? props.textAlign : 'justify'};
`;

export const Paragraph = styled(Text)`
  display: block;
  margin-top: 4px;
  margin-left: 8px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 40px;
  margin: 32px auto;
  background-color: ${theme.colors.blue0};
  border-radius: 16px;
  box-shadow: 0px 10px 15px -3px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.colors.white};
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.spacing.xxl};
  gap: ${theme.spacing.sm};
`;

export const Li = styled.li``;

export const Details = styled.details``;

export const Summary = styled.summary`
  cursor: pointer;
  color: ${colors.blue2};
  font-size: 14px;
  padding: 4px 0px 4px 12px;
`;

export const Link = styled.a`
  color: ${colors.blue2};
  text-decoration: none;
`;

