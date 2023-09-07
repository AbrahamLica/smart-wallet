import React, { useEffect, useState } from "react";
import close from "../../../img/close.svg";
import * as C from "./styles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import Category from "../../Home/Category/index";

const index = () => {
  const { state, dispatch } = useContext(Context);
  const [balanco, setBalanco] = useState<any>(0);
  const [despesa, setDespesa] = useState<any>(0);
  const [receita, setReceita] = useState<any>(0);

  useEffect(() => {
    calcularTudo();
  }, [state.data, dispatch]);

  function handleToggleMenu() {
    dispatch({
      type: "OPEN_MENU",
      payload: {
        menuIsOpen: state.others.menuIsOpen ? false : true,
      },
    });
  }

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
    <C.ContainerMenuHamburguer
      style={{ display: state.others.menuIsOpen ? "flex" : "none" }}
    >
      <C.ContainerIconClose>
        <C.IconClose src={close} onClick={handleToggleMenu}></C.IconClose>
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
