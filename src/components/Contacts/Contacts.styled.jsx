import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

`
export const Link = styled.a`
    color: var(--cl-secondary-color);
    cursor: pointer;
transition: var(--animat);

    &:hover, &:focus{
        color: var(--cl-accent-color);
    }
`