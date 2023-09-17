import { useEffect, useState } from "react";
import close from "../../../img/close.svg";
import * as C from "./styles";
import * as G from "../../../Helpers/GeneralStyles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import { handleToggleMenu } from "../../../Helpers/Helpers";
import FinancialSummary from "../../Home/FinancialSummary/index";
import { calcularTudo } from "../../../Helpers/Helpers";

const index = () => {
  const { state, dispatch } = useContext(Context);
  const [balanco, setBalanco] = useState<any>(0);
  const [despesa, setDespesa] = useState<any>(0);
  const [receita, setReceita] = useState<any>(0);

  useEffect(() => {
    calcularTudo(setDespesa, setReceita, setBalanco, state);
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

      <C.ContainerInformationsUserHamburguer>

        <C.ImgUser src={state.user.img} alt='usuario'></C.ImgUser>
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

      <FinancialSummary
        colorText="white"
        width="90%"
        border="1px solid white"
      ></FinancialSummary>
    </C.ContainerMenuHamburguer>
  );
};

export default index;
