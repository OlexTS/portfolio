import styled from '@emotion/styled';

export const HeaderBox = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 10px 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--cl-border-color);
  background-image: linear-gradient(
    to right,
    var(--cl-start-color),
    var(--cl-end-color)
  );
  opacity: 0.9;

  @media (min-width: 768px) {
    padding: 0 50px;
    min-height: 80px;
    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

export const Logo = styled.img`
  &:hover {
    transition: transform var(--animat);
    transform: scale(1.2);
  }
`;
