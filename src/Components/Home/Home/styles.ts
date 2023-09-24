import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";
import background from '../../../img/background.jpg'

/////////////////// PROPS ///////////////////////


export const MainContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-image: url(${background});
  min-height: 100vh;
  background-size: cover;
  
`;

export const FormContainer = styled.div<ContainerProps>`
  min-width: 80%;
  max-width: 80%;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 10px black;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.7);
  
`;






