import PropTypes from 'prop-types';
import { MainBox } from './Container.styled';

const Container = ({ children }) => {
  return <MainBox>{children}</MainBox>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
