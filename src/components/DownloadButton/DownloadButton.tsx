import { CvButton, CvIcon, DownloadButtonContainer } from './DownloadButton.styled';
import DownloadIcon from '@/assets/icons/descargar.png';

export const DownloadButton = () => {
  return (
    <DownloadButtonContainer>
      <CvButton
        href="/cv/CV_Antonio_Rodriguez_Gonzalez.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Descargar CV
        <CvIcon $src={DownloadIcon.src} aria-hidden="true" />
      </CvButton>
    </DownloadButtonContainer>
  );
};
