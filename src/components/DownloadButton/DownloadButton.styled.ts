import { colors } from "@/constants/colors";
import { Link } from "@/styles/GlobalStyle";
import styled from "styled-components";

export const DownloadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const CvButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 32px;
  color: ${colors.downloadBlue};
  border: 1px solid ${colors.downloadBlue};
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;

  img {
    transition: filter 0.3s ease;
  }

  &&:hover {
    background-color: #005bb5;
    color: #fff;
    border-color: #fff;
  }

  &&:hover img {
    filter: brightness(0) invert(1);
  }
`;