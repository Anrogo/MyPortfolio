import { NavBarLinkContainer, NavBarLinkItem, NavBarLinkAnchor } from "./NavBarLink.styled";

const NavBarLink = () => {

    return (
        <NavBarLinkContainer>
            <NavBarLinkItem>
                <NavBarLinkAnchor href="#experience">Experiencia</NavBarLinkAnchor>
            </NavBarLinkItem>
            <NavBarLinkItem>
                <NavBarLinkAnchor href="#projects">Proyectos</NavBarLinkAnchor>
            </NavBarLinkItem>
            <NavBarLinkItem>
                <NavBarLinkAnchor href="#education">Educación</NavBarLinkAnchor>
            </NavBarLinkItem>
        </NavBarLinkContainer>
    )
};

export default NavBarLink;

