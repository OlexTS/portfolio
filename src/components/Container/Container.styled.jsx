import styled from '@emotion/styled';

export const MainBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  padding: 40px 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 60px 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 80px 20px;
  }
`;
