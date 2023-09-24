import { useEffect, useState } from "react";
import close from "../../../img/close.svg";
import * as C from "./styles";
import * as G from "../../../Helpers/GeneralStyles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import { handleToggleMenu } from "../../../Helpers/Helpers";
import { calculateEverything } from "../../../Helpers/Helpers";
import FinancialSummary from "../../Home/FinancialSummary/index";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(Context);
  const [balance, setBalance] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);

  function goToLoginPage() {
    navigate('/')
  }

  useEffect(() => {
    calculateEverything(setExpense, setIncome, setBalance, state);
  }, [state.data, dispatch]);

  return (
    <C.ContainerMenuHamburguer
      style={{ display: state.others.menuIsOpen ? "flex" : "none" }}
    >
      <C.ContainerIconClose>
        <C.IconClose
          src={close}
          onClick={() => handleToggleMenu(dispatch, state)}
        ></C.IconClose>
      </C.ContainerIconClose>

      {state.user.img ? (
        <C.ContainerInformationsUserHamburguer>
          <C.ImgUser src={state.user.img} alt="user"></C.ImgUser>
          <G.Container margin="0 10px">
            <C.InformationsUserHamburguer>
              {state.user.name}
            </C.InformationsUserHamburguer>
            <C.InformationsUserHamburguer>
              {state.user.age} anos
            </C.InformationsUserHamburguer>
            <C.InformationsUserHamburguer>
              {state.user.profession}
            </C.InformationsUserHamburguer>
          </G.Container>
        </C.ContainerInformationsUserHamburguer>
      ) : (
        <G.Container margin="0 10px">
          <G.Text textAlign="center" color="white" fontSize="1.5rem">
            Você não está logado. <br />
            Efetuar{" "}
            <G.Link onClick={goToLoginPage} color="white">
              Login?
            </G.Link>
          </G.Text>
        </G.Container>
      )}

      <G.Text color="white" fontSize="1.6rem">
        {state.others.selectedManualMonth < 10
          ? `0${state.others.selectedManualMonth}`
          : state.others.selectedManualMonth}
        /{state.others.selectedManualYear}
      </G.Text>

      <FinancialSummary
        colorText="white"
        width="90%"
        border="1px solid white"
      ></FinancialSummary>
    </C.ContainerMenuHamburguer>
  );
};

export default index;
