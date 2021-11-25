import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3vh 5vw;

  @media(max-width: 980px){
    margin: 3vh  1vw;
  }

  @media(max-width:780px){
    justify-content: center;
  }

  @media(max-width:530px){
    margin-top: 20vh;
  }
`;

export const ErrorMsg = styled.h2`
text-align: center;
`;

