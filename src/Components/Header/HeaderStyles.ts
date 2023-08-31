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
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ContainerInformationsUser= styled.div<ContainerProps>`
    justify-self: start;
`;

export const ContainerLogoTitle= styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerNav = styled.nav<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;    
    justify-self: end;
`;


