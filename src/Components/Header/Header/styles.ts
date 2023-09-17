import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";
import { TextProps } from "../../../Types/typesStyles";

export const ContainerHeader = styled.div<ContainerProps>`
  width: 100%;
  background-color: #18206f;
  display: grid;
  grid-template-areas: "A1 A2 A2 A3";
  min-height: 15vh;

  @media (max-width: 780px) {
    grid-template-areas: "A2";
    justify-content: center;
  }
`;

export const ContainerLogoTitle = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-area: A2;
  /* background-color: red; */

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const imgMenuHamburguer = styled.img<ContainerProps>`
  display: none;
  width: 25px;
  cursor: pointer;

  @media (max-width: 780px) {
    display: block;
  }
`;
