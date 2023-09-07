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

export const ContainerMenuHamburguer = styled.div<ContainerProps>`
  position: fixed;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.4s;
  z-index: 1;
  overflow-y: auto;
`;

export const IconClose = styled.img<ContainerProps>`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  cursor: pointer;
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

export const ContainerSingleInformation = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  @media (max-width: 570px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Information = styled.p<TextProps>`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
`;

export const TitleInformation = styled.p<TextProps>`
  font-size: 1.4rem;
  color: white;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const ContainerInformationsUserHamburguer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerIconClose = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;
