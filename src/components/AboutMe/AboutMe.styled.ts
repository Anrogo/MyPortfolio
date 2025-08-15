import { Description } from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.spacing.giant};
  gap: ${theme.spacing.sm};
`;

export const AboutMeDescription = styled(Description)`
  padding: ${theme.spacing.giant};
`;