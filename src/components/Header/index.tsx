import React from "react";
import {
  HeaderContainer,
  InputsDiv,
  LocationInput,
  Logo,
  LogoBigText,
  LogoShortText,
  DateInput,
  SearchIcon,
  ButtonsDiv,
  LocationWrapper,
} from "./styles";
import { LocationPin } from "@styled-icons/entypo";
import { BasicButton } from "../PrimaryButton/styles";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoBigText>EXOTIC</LogoBigText>
        <LogoShortText>CARS</LogoShortText>
      </Logo>
      <InputsDiv>
        <LocationWrapper>
          <LocationPin color="#C4C4C4" size="20" />
          <LocationInput placeholder="Location" />
        </LocationWrapper>
        <DateInput type="date" />
        <DateInput type="date" />
        <SearchIcon size="20" />
      </InputsDiv>
      <ButtonsDiv>
        <BasicButton color="#7B89F4" hasBorder={false}>
          Sign up
        </BasicButton>
        <BasicButton color="#7B89F4" hasBorder={true}>
          Sign in
        </BasicButton>
      </ButtonsDiv>
    </HeaderContainer>
  );
};
