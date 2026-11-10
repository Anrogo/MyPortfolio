import Image from 'next/image';
import { SocialLinksContainer } from './SocialLinks.styled';
import LinkedinIcon from '@/assets/icons/linkedin.png';
import GithubIcon from '@/assets/icons/github.png';
import EmailIcon from '@/assets/icons/email.svg';
import DarkEmailIcon from '@/assets/icons/email2.png';
import DarkGithubIcon from '@/assets/icons/github2.png';
import DarkLinkedinIcon from '@/assets/icons/linkedin.png';

const SocialLinks = ({ darkTheme }: { darkTheme: boolean }) => {
  return (
    <SocialLinksContainer>
      <a
        href="https://www.linkedin.com/in/antonio-rodriguez-gonzalez/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={darkTheme ? DarkLinkedinIcon : LinkedinIcon}
          alt="Linkedin"
          width={32}
          height={32}
          title="Linkedin"
        />
      </a>
      <a href="https://github.com/Anrogo" target="_blank" rel="noopener noreferrer">
        <Image
          src={darkTheme ? DarkGithubIcon : GithubIcon}
          alt="GitHub"
          width={32}
          height={32}
          title="GitHub"
        />
      </a>
      <a href="mailto:antoniorogo96@gmail.com" target="_blank" rel="noopener noreferrer">
        <Image
          src={darkTheme ? DarkEmailIcon : EmailIcon}
          alt="Email"
          width={32}
          height={32}
          title="Email"
        />
      </a>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
