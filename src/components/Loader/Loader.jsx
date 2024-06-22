import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <Spinner>
      <RotatingLines strokeColor='orange' width='150' height='150'/>
    </Spinner>
  );
};

export default Loader;
