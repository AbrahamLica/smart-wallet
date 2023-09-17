import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";
import { TextProps } from "../../../Types/typesStyles";

export type ContainerCart = {
  width?: string;
  heigth?: string;
  padding?: string;
};

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

export const Title = styled.h1<ContainerProps>`
  font-size: 2.2rem;
  font-weight: bold;
  margin-right: 10px;
  color: white;

  @media (max-width: 990px) {
    font-size: 1.8rem;
  }

  @media (max-width: 780px) {
    font-size: 1.4rem;
  }
`;

export const imgWallet = styled.img<ContainerProps>`
  width: 50px;

  @media (max-width: 780px) {
    width: 35px;
  }
`;
