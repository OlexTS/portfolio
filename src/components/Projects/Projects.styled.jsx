import styled from '@emotion/styled';

export const ProjectsBox = styled.div`
  padding: 20px 10px;
`;
export const Title = styled.h2`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    font-size: 36px;
    margin-bottom: 50px;
  }
`;
export const TeamProjectsBox = styled.div`
  margin-bottom: 80px;
  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 100px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
  @media (min-width: 1280px) {
    gap: 50px;
  }
`;

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  min-height: 400px;
  /* border: 2px solid red; */
  border-radius: 15px;
  padding: 10px;
  background: linear-gradient(
    to right,
    var(--cl-start-color),
    var(--cl-end-color)
  );
  box-shadow: 10px 5px 15px #b4baba;

  @media (min-width: 768px) {
    max-width: 500px;
    min-height: 500px;
  }
`;

export const Image = styled.img`
object-fit: contain;
  @media (min-width: 768px) {
    height: 280px;
    width: 100%;
  }
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ListTechnologies = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ItemThechnology = styled.li`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  transition: var(--animat);
  &:hover,
  :focus {
    color: var(--cl-accent-color);
  }
`;

export const Description = styled.p`
  font-size: 16px;

  @media (min-width: 768px) {
    /* font-family: cursive; */
    font-size: 18px;
  }
`;
