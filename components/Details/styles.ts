import styled from "styled-components";

export const ContentContainer = styled.div`
  margin: 1vh 5vw;

  @media(max-width: 850px){
    margin: 1vh 1vw;
  }

  @media(max-width: 400px){
    padding: 0 10px;
  }
`;

export const PageTopContent = styled.div`
  display: flex;
  @media(max-width: 750px){
    flex-direction: column;
    align-items: center;
  }
`;

export const BrandLogo = styled.img`
  max-width: 200px;

  @media(max-width: 530px){
    max-width: 150px;
    margin-left: 200px;
    margin-bottom: 50px;
  }
`;

export const TextWrapper = styled.div`
  margin-left: 3vw;
`;

export const BoldText = styled.h2`
  font: normal normal bold 50px/67px Segoe UI;
  color: #313136;
  margin: 0;

  @media(max-width: 1250px){
    font-size: 35px;
  }

  @media(max-width: 400px){
    font-size: 30px;
    padding: 0;
  }
`;

export const NormalText = styled.p`
  font: normal normal 300 40px/53px Segoe UI;
  color: #313136;
  margin: 0;

  @media(max-width: 1250px){
    font-size: 25px;
  }
`;

export const PageMiddleContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 750px){
    margin-top: 3vh;
    flex-direction: column;
    align-items: center;
  }
`;

export const CatalogButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CarPicture = styled.img`
  width: max(42vw, 500px);

  @media(max-width: 530px){
    width: 350px;
    margin-top: 1vh;
  }
`;
export const PictureInfo = styled.div`
  margin-right: 3vw;
`;

export const CarColor = styled(NormalText)`
  text-transform: capitalize;
`;

export const BookButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media(max-width: 1250px){
    margin-top: 3vh;
  }
`;

export const PageBottomContent = styled.div`
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1250px){
    margin-top: 15vh;
  }

  @media(max-width: 750px){
    margin-top: 5vh;
  }

`;

export const PicturesWrapper = styled.div`
display: flex;
justify-content: space-around;

@media(max-width: 400px){
    margin-left: 18px;
  }
`;

export const CarouselButton = styled.button`
 color: #FFFFFF;
 border-radius: 50%;
 background-color: #313136;
 padding: 15px;
 margin-right: 25px;
 border: none;
 cursor: pointer;

 @media(max-width: 700px){
    margin-top: 5vh;
    display: none;
  }
`;
