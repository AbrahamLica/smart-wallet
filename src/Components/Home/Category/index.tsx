import { useContext, useEffect, useState } from "react";
import * as C from "./styles";
import { calcularTudo } from "../../../Helpers/Helpers";
import { Context } from "../../../Context/Context";

const index = () => {
  const { state, dispatch } = useContext(Context);
  const [balanco, setBalanco] = useState<any>(0);
  const [despesa, setDespesa] = useState<any>(0);
  const [receita, setReceita] = useState<any>(0);

  useEffect(() => {
    calcularTudo(setDespesa, setDespesa, setBalanco, state);
  }, []);

  return (
    <C.ContainerCategory>
      <C.ContainerSingleInformation>
        <C.TitleInformation>Receita</C.TitleInformation>
        <C.Information>{receita}</C.Information>
      </C.ContainerSingleInformation>

      <C.ContainerSingleInformation>
        <C.TitleInformation>Despesa</C.TitleInformation>
        <C.Information>{despesa}</C.Information>
      </C.ContainerSingleInformation>

      <C.ContainerSingleInformation>
        <C.TitleInformation>Balanço</C.TitleInformation>
        <C.Information>{balanco}</C.Information>
      </C.ContainerSingleInformation>
    </C.ContainerCategory>
  );
};

export default index;
