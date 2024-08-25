import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const linkStyles = `
  display: block;
  font-weight: 500;
  font-size: 18px;
  color: var(--cl-main-color);
  transition: color var(--animat);

  // &:hover,
  // &:focus {
  //   color: var(-cl-accent-color);
  // }
`;
const hoverFocusStyles = `
  transition: var(--animat);
  &:hover,
  &:focus {
    color: var(--cl-accent-color);
  }
`;

export const Nav = styled.nav`
  display: ${({ toggleMenu }) => (toggleMenu ? 'block' : 'none')};
  @media (max-width: 767px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1000;

    padding: 60px 0;
    transition: opacity var(--animat);
    opacity: ${({ toggleMenu }) => (toggleMenu ? 1 : 0)};
    visibility: ${({ toggleMenu }) => (toggleMenu ? 'visible' : 'hidden')};
    pointer-events: ${({ toggleMenu }) => (toggleMenu ? 'auto' : 'none')};
    text-align: center;
    background-color: var(--cl-bg-color);
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 60px;
  }
  @media (min-width: 1268px) {
    gap: 100px;
  }
`;
export const BtnMenu = styled.div`
  ${hoverFocusStyles}
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LinkResume = styled.a`
  ${linkStyles};
  ${hoverFocusStyles}
`;
export const Link = styled(NavLink)`
  ${linkStyles}
  ${hoverFocusStyles}
  &.active {
    color: var(--cl-accent-color);
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
