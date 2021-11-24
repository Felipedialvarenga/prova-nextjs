import React from "react";
import { Container, CarPicture } from "./styles";
import { iPicturePreviewProps } from "shared/interfaces";

const PicturePreview: React.FC<iPicturePreviewProps> = (props) => {
    const chosed = props.isChosen(props.picNumber);

    return (
        <Container onClick={() => props.pictureClickHandler(props.picNumber)} chosed={chosed} >
            <CarPicture src={props.src} />
        </Container>
    )
}

export default PicturePreview;