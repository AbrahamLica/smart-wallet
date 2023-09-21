import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";

export const ContainerCurrentDate = styled.div<ContainerProps>`
  border: 1px solid black;
  border-radius: 10px;
  height: 30px;
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 5px black;
`;

export const ImgArrow = styled.img<ContainerProps>`
  width: 30px;
  cursor: pointer;
`;
