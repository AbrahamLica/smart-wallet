import styled from "styled-components";

export type ContainerProps = {
  color?: string;
  id?: any;
  width?: string;
  heigth?: string;
  backgroundColor?: string;
  displayFlex?: boolean;
  flex?: string;
  flexWrap?: boolean;
  alignItems?: string;
  margin?: string;
  padding?: string;
  column?: boolean;
  border?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  justifyContent?: string;
};

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
  }

  @media (max-width: 780px) {
    display: none;
  }
`;
