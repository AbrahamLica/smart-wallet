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
  width: 150px;
  height: 40px;
  background-color: RGBA(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  padding: 0 1rem;
  border: 2px solid transparent;
  font-size: 1rem;
  transition: border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
    color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
    background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
  font-weight: bold;
  color: black;

  :hover,
  :focus {
    outline: none;
    border-color: #05060f;
  }

  @media (max-width: 900px) {
    width: 200px;
  }
`;

export const Select = styled.select<TextProps>`
  width: 150px;
  height: 40px;
  background-color: RGBA(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  padding: 0 1rem;
  border: 2px solid transparent;
  font-size: 1rem;
  transition: border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
    color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
    background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
  color: black;
  font-weight: bold;

  :hover,
  :focus {
    outline: none;
    border-color: #05060f;
  }

  @media (max-width: 900px) {
    width: 230px;
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
