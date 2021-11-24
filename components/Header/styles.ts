import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #ffffff;
  box-shadow: 0px 10px 30px #0000001a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 950px) {
    margin-bottom: 45px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 5vw;
`;

export const LogoBigText = styled.h1`
  letter-spacing: 0.96px;
  color: #313136;
  font-size: 32px;
`;

export const LogoShortText = styled.p`
  letter-spacing: 0.96px;
  color: #313136;
  font-size: 21px;
  margin-left: 5px;
`;

export const InputsDiv = styled.div`
  background-color: #f3f1fc;
  display: flex;
  align-items: center;
  border-radius: 18px;
  height: 40%;
  padding-left: 5px;
  font-size: 14px;

  @media (max-width: 950px) {
    position: absolute;
    background-color: #ffffff;
    bottom: -40px;
    left: 5%;

    &::before {
      content: "";
      height: 15px;
      width: 10px;
      background-color: #ffffff;
      top: -12px;
      left: 20px;
      position: absolute;
      border-radius: 40px;
    }

    &::after {
      content: "";
      height: 15px;
      width: 10px;
      background-color: #ffffff;
      top: -12px;
      right: 20px;
      position: absolute;
      border-radius: 40px;
    }
  }

  @media (max-width: 530px) {
    top: 90px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 140px;
    padding-left: 15px;
    padding-top: 10px;

    &::before {
      height: 25px;
      top: -22px;
    }

    &::after {
      height: 25px;
      top: -22px;
    }
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
`;

export const LocationInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: #656469;
  margin-left: 0.5vw;
`;

export const DateInput = styled(LocationInput)`
  position: relative;
  padding-left: 20px;
  font-size: 14px;
  margin-left: 5px;

  &::-webkit-calendar-picker-indicator {
    left: -25px;
    position: absolute;
    font-size: 14px;
    opacity: 0.6;
  }

  @media (max-width: 530px) {
    margin: 0;
  }
`;

export const SearchIcon = styled(Search)`
  color: #7b89f4;
  background-color: #ffffff;
  padding: 3px;
  border-radius: 50%;
  margin-left: 3vw;
  margin-right: 6px;
  cursor: pointer;
`;

export const ButtonsDiv = styled.div`
  margin-right: 5vw;

  @media(max-width: 360px){
    margin-left: 20px;
  }
`;
