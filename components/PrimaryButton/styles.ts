import styled from "styled-components";

export const BasicButton = styled.button<{color: string, hasBorder: boolean}>`
 color: ${props => props.color};
 background-color: transparent;
 border: ${props => props.hasBorder ? `2px solid ${props.color}` : 'none'};
 border-radius: 13px;
 padding: 1vh 1vw;
 font-size: 14px;
 font-weight: bold;
 cursor: pointer;
`;