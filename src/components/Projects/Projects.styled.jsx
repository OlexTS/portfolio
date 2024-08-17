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
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
  @media (min-width: 1280px) {
    gap: 50px;
  }
`;

export const Card = styled.li`
  max-width: 700px;

  border: 2px solid red;
  border-radius: 15px;
  padding: 10px;
  background-color: #f3fbfb;
`;

export const Image = styled.img`
  
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
