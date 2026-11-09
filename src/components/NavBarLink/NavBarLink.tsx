import type { NavBarLinkText } from '@/interfaces/Text';
import { NavBarLinkContainer, NavBarLinkItem, NavBarLinkAnchor } from './NavBarLink.styled';

const NavBarLink = ({ texts }: { texts: NavBarLinkText }) => {
  return (
    <NavBarLinkContainer>
      <NavBarLinkItem>
        <NavBarLinkAnchor href="#experience">{texts.experience}</NavBarLinkAnchor>
      </NavBarLinkItem>
      <NavBarLinkItem>
        <NavBarLinkAnchor href="#projects">{texts.projects}</NavBarLinkAnchor>
      </NavBarLinkItem>
      <NavBarLinkItem>
        <NavBarLinkAnchor href="#education">{texts.education}</NavBarLinkAnchor>
      </NavBarLinkItem>
    </NavBarLinkContainer>
  );
};

export default NavBarLink;
