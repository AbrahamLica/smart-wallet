import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";

/////////////////// PROPS ///////////////////////


export const MainContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const FormContainer = styled.div<ContainerProps>`
  min-width: 80%;
  max-width: 80%;
  /* min-height: 70vh; */
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 10px black;
  border-radius: 10px;
  margin-top: 20px;
  background-color: white;
`;






