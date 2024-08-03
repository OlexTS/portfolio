import styled from '@emotion/styled';

export const Hero = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 40px 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const MainTitle = styled.h1`
  font-size: 38px;
  margin-bottom: 10px;
  line-height: 1.1;
  letter-spacing: 0.2em;

  @media (min-width: 768px) {
    font-size: 46px;
    margin-bottom: 15px;
  }
  @media (min-width: 1280px) {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;
export const Text = styled.p`
  color: var(--cl-secondary-color);
  font-size: 20px;
  line-height: 1.1;
  font-family: cursive;

  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
  }
`;
export const Box = styled.div`
  @media (min-width: 768px) {
    max-width: 600px;
    padding: 10px;
    text-align: start;
  }
`;
export const Skills = styled.section`
  padding: 40px 10px;
`;
export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  letter-spacing: 0.2em;
  @media(min-width: 768px){
font-size:24px;
  }
  @media(min-width: 1280px){
font-size: 28px;
  }
`;
export const MyContacts = styled.section`
  padding: 40px 10px;
`;
