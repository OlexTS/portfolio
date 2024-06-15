import Navigation from 'components/Navigation/Navigation';
import logo from '../../images/logo.png'
import { HeaderBox } from './Header.styled';

const Header = () => {
  return (
    <HeaderBox>
      <a href="/" aria-label="Logo">
        <img
          src={logo}
          alt="Logo"
          width="40"
          height="40"
        />
      </a>
      <Navigation/>
    </HeaderBox>
  );
};

export default Header;
