import React from "react";
import { Container, CarPicture } from "./styles";
import { iPicturePreviewProps } from "shared/interfaces";

export const PicturePreview: React.FC<iPicturePreviewProps> = (props) => {
    const chosed = props.isChosen(props.picNumber);

    return (
        <Container onClick={() => props.pictureClickHandler(props.picNumber)} chosed={chosed} >
            <CarPicture src={props.src} height={313} width={708}/>
        </Container>
    )
}