import { useContext, useEffect, useState } from "react";
import * as C from "./styles";
import { calcularTudo } from "../../../Helpers/Helpers";
import { Context } from "../../../Context/Context";

type MyComponentProps = {
  colorText?: string;
  width?: string;
  border?: string;
};

const index: React.FC<MyComponentProps> = (props) => {
  const { state, dispatch } = useContext(Context);
  const [balanco, setBalanco] = useState<number>(0);
  const [despesa, setDespesa] = useState<number>(0);
  const [receita, setReceita] = useState<number>(0);

  useEffect(() => {
    calcularTudo(setDespesa, setReceita, setBalanco, state);
  }, [state.data]);

  return (
    <C.ContainerFinancialSummary
      color={props.colorText}
      width={props.width}
      border={props.border}
    >
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
    </C.ContainerFinancialSummary>
  );
};

export default index;
