import styled from "styled-components";
import { ContainerProps } from "../../Types/typesStyles";
import { TextProps } from "../../Types/typesStyles";

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
  margin-top: 20px;
`;

export const ImgUser = styled.img<ContainerProps>`
  width: 50px;
  cursor: pointer;
  padding: 2px;
  margin: 0 2px;
  border: 1px solid transparent;
  border-radius: 10px;
`;

export const Span = styled.div<ContainerProps>`
  word-break: break-all;

  p {
    margin-top: 3px;
  }
`;
