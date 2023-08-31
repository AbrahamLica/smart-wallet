import styled from "styled-components";

/////////////////// PROPS ///////////////////////

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

export type InputProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  width?: string;
  backgroundColor?: string;
  margin?: string;
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

export const MainContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.div<ContainerProps>`
  width: 80%;
  min-height: 80vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px black;
  border-radius: 10px;
  margin-top: 20px;
  background-color: white;
`;

export const ContainerCategory = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ContainerInformations = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px 0px;
`;

export const ContainerSingleInformation = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
`;

export const TitleInformation = styled.p<TextProps>`
  font-size: 1.4rem;
  color: black;
  font-weight: bold;
`;

export const Information = styled.p<TextProps>`
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
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

export const Link = styled.a<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  cursor: pointer;
  text-decoration: none;
`;

export const Input = styled.input<InputProps>`
  height: 30px;
  padding: 10px;
`;

export const Select = styled.select<TextProps>`
  height: 30px;
`;

export const Option = styled.option<TextProps>`
  height: 30px;
`;

export const ButtonAdd = styled.button<TextProps>`
  font-size: 1rem;
  padding: 7px 12px;
  background-color: black;
  border: none;
  color: white;
  border-radius: 10px;
`;

export const Table = styled.table<ContainerProps>`
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
  border-collapse: collapse;
`;
