import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <Spinner>
      <RotatingLines />
    </Spinner>
  );
};

export default Loader;
