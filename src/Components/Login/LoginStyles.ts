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

export const MainContainerModal = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.322);
  opacity: 1;
  transition: all ease 0.5s;
`;

export const ContainerModal = styled.form<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  min-width: 30vw;
  z-index: 10;
  border-radius: 20px;
  box-shadow: 2px 2px #323232;
  border: 2px solid #323232;
  max-height: 90vh;

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 425px) {
    width: 70%;
  }
`;

export const ContainerLabelInput = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding: 10px; */
  width: 90%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Label = styled.label<ContainerProps>`
  margin: ${(props) => props.margin};
`;

export const InputText = styled.input<ContainerProps>`
  padding: 6px;
  box-shadow: 2px 2px #323232;
  border: 2px solid #323232;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`;

export const InputNumber = styled.input<ContainerProps>`
  padding: 6px;
  box-shadow: 2px 2px #323232;
  border: 2px solid #323232;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`;

export const InputRadio = styled.input<ContainerProps>`
  margin: ${(props) => props.margin};
`;

export const ButtonSend = styled.button<ContainerProps>`
  width: 9em;
  height: 3em;
  border-radius: 30em;
  font-size: 15px;
  font-family: inherit;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  cursor: pointer;
  margin-top: 10px;

  ::before {
    content: "";
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  :hover::before {
    width: 9em;
  }
`;

export const ContainerAvatars = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

export const ImgUser = styled.img<ContainerProps>`
  width: 50px;
  cursor: pointer;
  padding: 2px;
`;

export const Span = styled.div<ContainerProps>`
  word-break: break-all;

  p {
    margin-top: 3px;
  }
`;
