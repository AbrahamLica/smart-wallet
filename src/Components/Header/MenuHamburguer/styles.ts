import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";
import { TextProps } from "../../../Types/typesStyles";

export const ContainerMenuHamburguer = styled.div<ContainerProps>`
  position: fixed;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.4s;
  z-index: 1;
  overflow-y: auto;
`;

export const ContainerIconClose = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

export const IconClose = styled.img<ContainerProps>`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  cursor: pointer;
`;

export const ContainerInformationsUserHamburguer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgUser = styled.img<ContainerProps>`
  width: auto;
`;

export const InformationsUserHamburguer = styled.p<ContainerProps>`
  color: white;
  text-align: center;
  font-size: 1.7rem;

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;
