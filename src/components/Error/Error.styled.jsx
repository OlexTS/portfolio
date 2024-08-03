import styled from '@emotion/styled';

export const Box = styled.div`
  margin: 0 auto;
  padding: 40px 10px;
`;
export const Img = styled.img`
  margin-bottom: 20px;
  width: 300px;
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1280px) {
    width: 500px;
  }
`;
export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1280px) {
    font-size: 36px;
  }
`;
