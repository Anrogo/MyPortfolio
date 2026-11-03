import { NavBarLinkTexts } from '@/constants/texts';
import { NavBarLinkContainer, NavBarLinkItem, NavBarLinkAnchor } from './NavBarLink.styled';

const NavBarLink = () => {
  return (
    <NavBarLinkContainer>
      <NavBarLinkItem>
        <NavBarLinkAnchor href="#experience">{NavBarLinkTexts.experience}</NavBarLinkAnchor>
      </NavBarLinkItem>
      <NavBarLinkItem>
        <NavBarLinkAnchor href="#projects">{NavBarLinkTexts.projects}</NavBarLinkAnchor>
      </NavBarLinkItem>
      <NavBarLinkItem>
        <NavBarLinkAnchor href="#education">{NavBarLinkTexts.education}</NavBarLinkAnchor>
      </NavBarLinkItem>
    </NavBarLinkContainer>
  );
};

export default NavBarLink;
