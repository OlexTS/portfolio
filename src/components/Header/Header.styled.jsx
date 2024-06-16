import styled from '@emotion/styled';

export const HeaderBox = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 10px 30px;
  border-bottom: 1px solid var(--cl-border-color);
  background-image: linear-gradient(to right, var(--cl-start-color), var(--cl-end-color));

  @media (min-width: 768px) {
    padding: 0 50px;
    min-height: 80px;
  }
  
`;
