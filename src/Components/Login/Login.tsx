import React from "react";
import * as C from "./LoginStyles";

const Login = () => {
  return (
    <C.MainContainerModal>
      <C.ContainerModal>
        <C.ContainerLabelInput>
          <C.Label margin="0px 0px 5px 0px">Nome:</C.Label>
          <C.InputText type="text"></C.InputText>
        </C.ContainerLabelInput>

        <C.ContainerLabelInput>
          <C.Label margin="0px 0px 5px 0px">Idade:</C.Label>
          <C.InputNumber type="number"></C.InputNumber>
        </C.ContainerLabelInput>

        <C.ContainerLabelInput>
          <C.Label margin="0px 0px 5px 0px">Profissão:</C.Label>
          <C.InputText type="text"></C.InputText>
        </C.ContainerLabelInput>

        <C.Container
          displayFlex
          alignItems="center"
          justifyContent="flex-start"
          width="90%"
          // backgroundColor="blue"
          padding="10px"
        >
          <C.Label>Sexo:</C.Label>
          <C.Label htmlFor="masculino" margin="0px 20px">
            Masculino
          </C.Label>
          <C.InputRadio
            type="radio"
            name="sex"
            id="masculino"
            value="masculino"
          ></C.InputRadio>
          <C.Label htmlFor="feminino" margin="0px 20px">
            Feminino
          </C.Label>
          <C.InputRadio
            type="radio"
            name="sex"
            id="feminino"
            value="feminino"
          ></C.InputRadio>
        </C.Container>
      </C.ContainerModal>
    </C.MainContainerModal>
  );
};

export default Login;
