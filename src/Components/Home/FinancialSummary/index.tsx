import { useContext, useEffect, useState } from "react";
import * as C from "./styles";
import { calcularTudo } from "../../../Helpers/Helpers";
import { Context } from "../../../Context/Context";
import { formatarMoeda } from "../../../Helpers/Helpers";

type MyComponentProps = {
  colorText?: string;
  width?: string;
  border?: string;
  margin?: string;
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
      margin={props.margin}
    >
      <C.ContainerSingleInformation>
        <C.TitleInformation>Receita</C.TitleInformation>
        <C.Information>{formatarMoeda(receita)}</C.Information>
      </C.ContainerSingleInformation>

      <C.ContainerSingleInformation>
        <C.TitleInformation>Despesa</C.TitleInformation>
        <C.Information>{formatarMoeda(despesa)}</C.Information>
      </C.ContainerSingleInformation>

      <C.ContainerSingleInformation>
        <C.TitleInformation>Balanço</C.TitleInformation>
        <C.Information>{formatarMoeda(balanco)}</C.Information>
      </C.ContainerSingleInformation>
    </C.ContainerFinancialSummary>
  );
};

export default index;
