import Image from 'next/image';
import { CvButton, DownloadButtonContainer } from './DownloadButton.styled';
import DownloadIcon from '@/assets/icons/descargar.png';

export const DownloadButton = ({ darkTheme }: { darkTheme: boolean }) => {
  return (
    <DownloadButtonContainer>
      <CvButton
        href="/cv/Antonio_Rodriguez_Gonzalez_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Descargar CV
        <Image src={DownloadIcon} alt="Descargar CV" width={32} height={32} />
      </CvButton>
    </DownloadButtonContainer>
  );
};
