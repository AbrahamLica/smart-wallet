import * as C from "./styles";
import * as G from "../../../Helpers/GeneralStyles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import { useNavigate } from "react-router-dom";

const index = () => {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  function goToLoginPage() {
    navigate("/");
  }

  return (
    <C.ContainerInformationsUser>
      {state.user.name ? (
        <>
          <img src={state.user.img} alt="Usuario" width={50} />
          <G.Container margin="0 10px">
            <G.Text color="white">{state.user.name}</G.Text>
            <G.Text color="white">{state.user.age} anos</G.Text>
            <G.Text color="white">{state.user.profession}</G.Text>
          </G.Container>
        </>
      ) : (
        <G.Container margin="0 10px">
          <G.Text textAlign="center" color="white">
            Você não está logado. <br />
            Efetuar{" "}
            <G.Link onClick={goToLoginPage} color="white">
              Login?
            </G.Link>
          </G.Text>
        </G.Container>
      )}
    </C.ContainerInformationsUser>
  );
};

export default index;
