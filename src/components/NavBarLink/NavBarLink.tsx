import { NavBarLinkContainer, NavBarLinkItem, NavBarLinkAnchor } from './NavBarLink.styled';
import type { NavBarLinkText } from '@/interfaces/Text';

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
