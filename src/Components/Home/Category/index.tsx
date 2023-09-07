import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Context } from "../../../Context/Context";
import { useContext } from "react";

const index = () => {
  const { state, dispatch } = useContext(Context);
  const [balanco, setBalanco] = useState<any>(0);
  const [despesa, setDespesa] = useState<any>(0);
  const [receita, setReceita] = useState<any>(0);
  const [valor, setValor] = useState("");

  useEffect(() => {
    calcularTudo();
  }, []);

  const formatMoney = (value: any) => {
    if (typeof value !== "string") {
      return "0,00"; // ou algum valor padrão apropriado
    }

    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = (parseFloat(numericValue) / 100).toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
      }
    );

    return formattedValue;
  };

  function calcularTudo() {
    var totalDespesaFormatado = 0;
    var totalReceitaFormatado = 0;
    var totalBalanco = 0;

    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].despesa) {
        totalDespesaFormatado += parseFloat(
          state.data[i].despesa.slice(2).replace(".", "").replace(",", ".")
        );
      }
    }
    setDespesa(formatMoney(totalDespesaFormatado.toFixed(2)));

    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].receita) {
        totalReceitaFormatado += parseFloat(
          state.data[i].receita.slice(2).replace(".", "").replace(",", ".")
        );
      }
    }
    setReceita(formatMoney(totalReceitaFormatado.toFixed(2)));
    totalBalanco = totalReceitaFormatado - totalDespesaFormatado;

    if (totalBalanco < 0) {
      setBalanco("-" + formatMoney(Math.abs(totalBalanco).toFixed(2)));
    } else {
      setBalanco(formatMoney(totalBalanco.toFixed(2)));
    }
  }

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
