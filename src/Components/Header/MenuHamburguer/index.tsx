import { useEffect, useState } from "react";
import close from "../../../img/close.svg";
import * as C from "./styles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import { handleToggleMenu } from "../../../Helpers/Helpers";
import Category from "../../Home/FinancialSummary/index";
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
        <C.IconClose src={close} onClick={() => handleToggleMenu}></C.IconClose>
      </C.ContainerIconClose>

      <C.ContainerInformationsUserHamburguer>
        <img src={state.user.img} alt="Usuario" width={150} />
        <C.Container margin="0 10px">
          <C.InformationsUserHamburguer>
            {state.user.name}
          </C.InformationsUserHamburguer>
          <C.InformationsUserHamburguer>
            {state.user.age} anos
          </C.InformationsUserHamburguer>
          <C.InformationsUserHamburguer>
            {state.user.profession}
          </C.InformationsUserHamburguer>
        </C.Container>
      </C.ContainerInformationsUserHamburguer>

      <Category></Category>
    </C.ContainerMenuHamburguer>
  );
};

export default index;
