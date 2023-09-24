import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";

export const ContainerTable = styled.div<ContainerProps>`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;

  @media (max-width: 600px) {
    overflow-x: auto;
  }
`;

export const Table = styled.table<ContainerProps>`
  border-collapse: collapse;
`;

export const Th = styled.th<ContainerProps>`
  text-align: left;
  width: 35%;
  padding: 10px;
`;

export const Td = styled.th<ContainerProps>`
  text-align: left;
  padding: 10px;
  width: auto;
  white-space: nowrap;
`;

export const ImgDelete = styled.img<ContainerProps>`
  width: 35px;
  cursor: pointer;
`;
