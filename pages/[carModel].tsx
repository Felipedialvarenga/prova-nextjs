import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "store";
//import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";

import {
  ArrowButton,
  Header,
  BrandLogo,
  PageTopContent,
  BoldText,
  NormalText,
  ContentContainer,
  TextWrapper,
  PageMiddleContent,
  CarPicture,
  PictureInfo,
  CarColor,
  CatalogButtonWrapper,
  BookButtonWrapper,
  PageBottomContent,
  CarouselButton,
  PicturesWrapper,
  PicturePreview,
} from "components";
import { iChosedPictureInfo } from "shared/interfaces";
import { ArrowRight, ArrowLeft } from "@styled-icons/bootstrap";

import { iCarData, iDetailPictures } from "shared/interfaces";
const data = require("../public/cars.json");

const Details: React.FC = () => {
  const [chosedPictureIdx, setChosedPictureIdx] = useState(0);
  const router = useRouter();
  const carModel = router.query.carModel;
  const carsData = useSelector((state: RootState) => state.cars.cars);
  const chosedCarArr = carsData.filter(car => car.model === carModel);
  const chosedCar = chosedCarArr[0];

  const chosedPicture: iChosedPictureInfo = {
    picture: chosedCar.detailPictures[chosedPictureIdx].pic,
    color: chosedCar.detailPictures[chosedPictureIdx].color,
    picNumber: chosedPictureIdx,
  };

  const pictureClickHandler = (picIdx: number) => {
    setChosedPictureIdx(picIdx);
  };

  const leftButtonHandler = () => {
    if (chosedPictureIdx === 0) {
      setChosedPictureIdx(chosedCar.detailPictures.length - 1);
    } else {
      setChosedPictureIdx((prevIdx) => prevIdx - 1);
    }
  };

  const rightButtonHandler = () => {
    if (chosedPictureIdx === chosedCar.detailPictures.length - 1) {
      setChosedPictureIdx(0);
    } else {
      setChosedPictureIdx((prevIdx) => prevIdx + 1);
    }
  };

  const isChosen = (idx: number) => chosedPictureIdx === idx;

  const carouselOrder = () => {
    const carouselArray = [];

    if (chosedPictureIdx === 0) {
      carouselArray.push(2);
    } else {
      carouselArray.push(chosedPictureIdx - 1);
    }

    carouselArray.push(chosedPictureIdx);

    if (chosedPictureIdx === 2) {
      carouselArray.push(0);
    } else {
      carouselArray.push(chosedPictureIdx + 1);
    }

    return carouselArray;
  };

  const carouselIdx = carouselOrder();

  const arrowButtonHandler = () => {
    router.push("/");
  };

  return (
    <React.Fragment>
      <Header />
      <ContentContainer>
        <PageTopContent>
          <BrandLogo src={chosedCar.logo} />
          <TextWrapper>
            <BoldText>{chosedCar.brand + " " + chosedCar.model}</BoldText>
            <NormalText>{`$${chosedCar.price}/day`}</NormalText>
          </TextWrapper>
        </PageTopContent>
        <PageMiddleContent>
          <CatalogButtonWrapper>
            <ArrowButton
              backgroundColor="transparent"
              textColor="#313136"
              direction="left"
              btClickHandler={arrowButtonHandler}
            >
              Back to Catalog
            </ArrowButton>
          </CatalogButtonWrapper>
          <CarPicture src={chosedPicture.picture} height={313} width={708} priority/>
          <PictureInfo>
            <BoldText>{`0${chosedPicture.picNumber + 1}`}</BoldText>
            <CarColor>{chosedPicture.color}</CarColor>
          </PictureInfo>
        </PageMiddleContent>
        <BookButtonWrapper>
          <ArrowButton
            backgroundColor="#313136"
            textColor="#FFFFFF"
            direction="right"
            btClickHandler={() => alert("Booked !")}
          >
            Book now
          </ArrowButton>
        </BookButtonWrapper>
        <PageBottomContent>
          {chosedCar.detailPictures.length > 1 && (
            <CarouselButton onClick={leftButtonHandler}>
              <ArrowLeft size={15} />
            </CarouselButton>
          )}
          <PicturesWrapper>
            {chosedCar.detailPictures.map((picture: iDetailPictures, idx: number) =>
              chosedCar.detailPictures.length === 3 ? (
                <PicturePreview
                  key={picture.color + idx}
                  src={chosedCar.detailPictures[carouselIdx[idx]].pic}
                  picNumber={carouselIdx[idx]}
                  pictureClickHandler={pictureClickHandler}
                  isChosen={isChosen}
                />
              ) : (
                <PicturePreview
                  key={picture.color + idx}
                  src={picture.pic}
                  picNumber={idx}
                  pictureClickHandler={pictureClickHandler}
                  isChosen={isChosen}
                />
              )
            )}
          </PicturesWrapper>
          {chosedCar.detailPictures.length > 1 && (
            <CarouselButton onClick={rightButtonHandler}>
              <ArrowRight size={15} />
            </CarouselButton>
          )}
        </PageBottomContent>
      </ContentContainer>
    </React.Fragment>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const carModels = data.cars.map((car: iCarData) => car.model);
//   const someCarModels = carModels.filter((model: string, idx: number) => idx < 3)
//   console.log(someCarModels)

//   return {
//     paths: someCarModels.map((model: string) => ({ params: { carModel: model } })),
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const carModel = context.params!.carModel;

//   let chosedCar;

//   data.cars.forEach((car: iCarData) => {
//     if (car.model === carModel) {
//       chosedCar = car;
//     }
//   });

//   return {
//     props: {
//       chosedCar,
//     },
//   };
// };

export default Details;
