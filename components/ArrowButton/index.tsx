import React from "react";
import {ButtonContainer, StyledArrowLeft, StyledArrowRight} from './styles'
import {iArrowButtonProps} from '../../shared/interfaces'

export const ArrowButton: React.FC<iArrowButtonProps> = (props) => {
    return (
        <ButtonContainer backgroundColor={props.backgroundColor} textColor={props.textColor} onClick={props.btClickHandler}>
            {props.direction === "left" && <StyledArrowLeft size={20} />}
            {props.children}
            {props.direction === "right" && <StyledArrowRight size={20} />}
        </ButtonContainer>
    )
}
