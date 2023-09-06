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

export type TextProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  textAlign?: string;
  margin?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  zIndex?: boolean;
};

export type ContainerCart = {
  width?: string;
  heigth?: string;
  padding?: string;
};

export const Container = styled.div<ContainerProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => (props.displayFlex ? "flex" : "block")};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: ${(props) => props.flexWrap && "wrap"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-image: url(${(props) => props.backgroundImage});
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSize};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  overflow: hidden;
`;

export const Text = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  z-index: ${(props) => (props.zIndex ? "1" : "")};
`;

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

export const imgWallet = styled.img<ContainerProps>`
  width: 50px;

  @media (max-width: 780px) {
    width: 35px;
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

export const ContainerMenuHamburguer = styled.div<ContainerProps>`
  position: fixed;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;
  /* overflow: hidden; */
  background-color: black;
  top: 0;
  left: 0;
  transition: 0.4s;
  z-index: 1;
`;

export const IconClose = styled.img<ContainerProps>`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  cursor: pointer;
`;

export const ContainerCategory = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  min-height: 100px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
`;

export const ContainerInformations = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px 0px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerSingleInformation = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
`;

export const TitleInformation = styled.p<TextProps>`
  font-size: 1.4rem;
  color: white;
  font-weight: bold;

  @media (max-width: 425px) {
      font-size: 0.8rem;
    }
`;

export const Information = styled.p<TextProps>`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
`;
