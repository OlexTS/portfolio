import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
export const Image = styled.img`
  margin: auto;
`;
export const Item = styled.li`
transition: var(--animat);
  &:hover {
    transform: scale(1.3);
  }
`;
