import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";

export const ContainerNav = styled.nav<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  justify-self: end;
  width: 100%;
  grid-area: A3;

  img {
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 780px) {
    display: none;
  }
`;
