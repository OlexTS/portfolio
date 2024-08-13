import styled from "@emotion/styled";

export const ProjectsBox = styled.div`
    padding: 20px 10px;
`
export const Title = styled.h2`
margin-bottom: 30px;
   @media (min-width: 768px){
    font-size: 30px;
    margin-bottom: 40px;
   }
   @media (min-width: 1280px){
    font-size: 36px;
    margin-bottom: 50px;
   }
`
export const TeamProjectsBox = styled.div`
    margin-bottom: 20px;
    @media (min-width: 768px){
        margin-bottom: 40px;
    }
    @media (min-width: 1280px){
        margin-bottom: 60px;
    }
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
   
`

export const Card = styled.li`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    width: 700px;
    border: 2px solid red;
    border-radius: 15px;
    padding: 10px;
    background-color: #f3fbfb;
`