import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Link = styled.a`
  color: var(--cl-secondary-color);
  cursor: pointer;
  transition: var(--animat);
  display: inline-block;
  &:hover,
  &:focus {
    color: var(--cl-accent-color);
    transform: scale(1.3);
  }
`;

