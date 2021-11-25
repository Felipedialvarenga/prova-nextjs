import styled from "styled-components";
import { ArrowRight, ArrowLeft } from "@styled-icons/bootstrap";

export const ButtonContainer = styled.div<{backgroundColor: string, textColor: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  border: 1px solid ${props => props.textColor};
  font: bold bold 300 16px/21px Segoe UI;
  border-radius: 25px;
  height: 50px;
  min-width: 177px;
  cursor: pointer;
  transition: transform .2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledArrowRight = styled(ArrowRight)`
    margin-left: 5px;
`;

export const StyledArrowLeft = styled(ArrowLeft)`
    margin-right: 5px;
`;
