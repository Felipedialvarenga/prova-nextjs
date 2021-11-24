import styled from "styled-components";

export const Container = styled.div<{chosed: boolean, onClick: (picNumber:number) => void}>`
width: max(12vw,120px);
background-color: ${props => props.chosed ? '#c9b9c3' : '#C4C4C4'};
border-radius: 8px;
margin-right: 100px;
cursor: pointer;
transform: ${props => props.chosed ? 'translateY(-20px)' : 'translateY(0)'};
transition: transform .2s linear;

  @media(max-width: 850px){
    margin-right: 50px;
  }

  @media(max-width: 550px){
    margin-right: 10px;
  }
`;

export const CarPicture = styled.img`
  width: max(15vw,150px);

  @media(max-width: 550px){
    width: 90px;
  }
`;
