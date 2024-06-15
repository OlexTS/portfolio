import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { BtnMenu, Link, LinkResume, Nav } from './Navigation.styled';

const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(prev => !prev);
  };

  return (
    <div>
      <BtnMenu onClick={toggleMenu}>
        {isOpenMenu ? <IoClose size="40" /> : <BiMenu size="40" />}
      </BtnMenu>
      <Nav toggleMenu={isOpenMenu}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <LinkResume
          href="https://drive.google.com/file/d/1px2Ls7PSdFQKTz9Ikp3BpeNIo284ux8t/view"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
        >
          Resume
        </LinkResume>
      </Nav>
    </div>
  );
};

export default Navigation;