import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const linkStyles = `
  display: block;
  font-weight: 500;
  font-size: 18px;
  color: var(--cl-main-color);
  transition: color var(--animat);

  &:hover,
  &:focus {
    color: var(-cl-accent-color);
  }
`;

export const Nav = styled.nav`
  @media (max-width: 767px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 100;

    padding: 60px 0;
    transition: opacity var(--animat);
    opacity: ${({ toggleMenu }) => (toggleMenu ? 1 : 0)};
    pointer-events: ${({ toggleMenu }) => (toggleMenu ? 'auto' : 'none')};
    text-align: center;
    background-color: #bfb8b8;
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
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LinkResume = styled.a`
  ${linkStyles}
`;
export const Link = styled(NavLink)`
  ${linkStyles}
  &.active {
    color: var(--cl-accent-color);
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }


`;
