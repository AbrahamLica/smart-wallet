import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";
import { TextProps } from "../../../Types/typesStyles";
import { InputProps } from "../../../Types/typesStyles";

/////////////////// PROPS ///////////////////////

export const ContainerInformations = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px 0px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerSingleInformation = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  @media (max-width: 570px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const TitleInformation = styled.p<TextProps>`
  font-size: 1.4rem;
  color: black;
  font-weight: bold;
  margin-right: 5px;
`;

export const Input = styled.input<InputProps>`
  height: 30px;
  width: 150px;

  @media (max-width: 900px) {
    width: 200px;
  }
`;

export const Select = styled.select<TextProps>`
  height: 35px;
  width: 150px;

  @media (max-width: 900px) {
    width: 200px;
  }
`;

export const Option = styled.option<TextProps>`
  height: 30px;
`;

export const ButtonAdd = styled.button<TextProps>`
  font-size: 1rem;
  padding: 7px 12px;
  background-color: black;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 900px) {
    margin-top: 10px;
  }
`;
