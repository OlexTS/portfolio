import error from '../../images/notFound.webp';
import { Box, Img, Text } from './Error.styled';
const Error = () => {
  return (
    <Box>
      <Img src={error} alt="Not found"/>
      <Text>Page not found 😠</Text>
    </Box>
  );
};

export default Error;
