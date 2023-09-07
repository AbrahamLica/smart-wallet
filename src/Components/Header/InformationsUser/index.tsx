import React from "react";
import * as C from "./styles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

const index = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <C.ContainerInformationsUser>
      {state.user.name ? (
        <>
          <img src={state.user.img} alt="Usuario" width={50} />
          <C.Container margin="0 10px">
            <C.Text color="white">{state.user.name}</C.Text>
            <C.Text color="white">{state.user.age} anos</C.Text>
            <C.Text color="white">{state.user.profession}</C.Text>
          </C.Container>
        </>
      ) : null}
    </C.ContainerInformationsUser>
  );
};

export default index;
