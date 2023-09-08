import { Context } from "../Context/Context";
import { ChangeEvent, useContext, useEffect, useState } from "react";

export function handleToggleMenu(dispatch: any, state: any) {
  dispatch({
    type: "OPEN_MENU",
    payload: {
      menuIsOpen: state.others.menuIsOpen ? false : true,
    },
  });
}

export function calcularTudo(
  setDespesa: any,
  setReceita: any,
  setBalanco: any,
  state: any
) {
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

export const formatMoney = (value: any) => {
  if (typeof value !== "string") {
    return "0,00";
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

export function Add(
  data: any,
  categoria: any,
  titulo: any,
  valor: any,
  setData: any,
  setValor: any,
  setTitulo: any,
  dispatch: any
) {
  let day = data.slice(8, 10);
  let month = data.slice(5, 7);
  let year = data.slice(0, 4);
  let dateFullFixed = `${day}/${month}/${year}`;

  if (data == 0 || categoria == "" || titulo == "" || valor == "0,00") {
    alert("Por favor, preencha todos os dados antes de adicionar!");
  } else {
    if (categoria == "Despesa") {
      dispatch({
        type: "CADASTRAR_DESPESA",
        payload: {
          data: dateFullFixed,
          categoria: categoria,
          titulo: titulo,
          valor: valor,
          despesa: valor,
        },
      });
    } else if (categoria == "Salário" || categoria == "Extra") {
      dispatch({
        type: "CADASTRAR_RECEITA",
        payload: {
          data: dateFullFixed,
          categoria: categoria,
          titulo: titulo,
          valor: valor,
          receita: valor,
        },
      });
    }
    setData(0);
    setValor("0,00");
    setTitulo("");
  }
}

