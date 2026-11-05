import Image from 'next/image';
import { SocialLinksContainer } from './SocialLinks.styled';
import LinkedinIcon from '@/assets/icons/linkedin.png';
import GithubIcon from '@/assets/icons/github.png';
import EmailIcon from '@/assets/icons/email.png';

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <a
        href="https://www.linkedin.com/in/antonio-rodriguez-gonzalez/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={LinkedinIcon} alt="Linkedin" width={32} height={32} />
      </a>
      <a href="https://github.com/Anrogo" target="_blank" rel="noopener noreferrer">
        <Image src={GithubIcon} alt="GitHub" width={32} height={32} />
      </a>
      <a href="mailto:antoniorogo96@gmail.com" target="_blank" rel="noopener noreferrer">
        <Image src={EmailIcon} alt="Email" width={32} height={32} />
      </a>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
