import styled from '@emotion/styled';

export const HeaderBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 10px 40px;
  border-bottom: 1px solid var(--cl-border-color);

  @media (min-width: 768px) {
    padding: 0 80px;
  }
`;
