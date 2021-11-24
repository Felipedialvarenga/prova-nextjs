import React from "react";
import { CardContainer, TopCard, CarBrand, CarModel, Dots, GreyDot, CarImg, CarPrice, PriceText } from "./styles";
import { iCarCard } from "shared/interfaces";

export const CarCard: React.FC<iCarCard> = (props) => {
    return (
        <CardContainer onClick={() => props.carClickHandler(props.model)}>
            <TopCard>
                <CarBrand>{props.brand}</CarBrand>
                <Dots>
                    <GreyDot/>
                    <GreyDot/>
                    <GreyDot/>
                </Dots>
            </TopCard>
            <CarModel>{props.model}</CarModel>
            <CarImg src={props.picture}/>
            <CarPrice>
                <PriceText>{props.price}</PriceText>
            </CarPrice>
        </CardContainer>
    )
}
