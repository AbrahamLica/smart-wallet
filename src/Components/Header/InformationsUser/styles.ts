import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";

export const ContainerInformationsUser = styled.div<ContainerProps>`
  justify-self: start;
  display: flex;
  align-items: center;
  width: 100%;
  grid-area: A1;

  p {
    margin: 0;
  }

  @media (max-width: 900px) {
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 780px) {
    display: none;
  }
`;
