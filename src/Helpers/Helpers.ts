import { Context } from "../Context/Context";
import { ChangeEvent, useContext, useEffect, useState } from "react";

// change input functions

export function changeSetName(e: ChangeEvent<HTMLInputElement>, setName: any) {
  setName(e.target.value);
}

export function changeSetAge(
  e: ChangeEvent<HTMLInputElement>,
  setAge: any,
  setAgeValid: any
) {
  setAge(e.target.valueAsNumber);
  setAgeValid(true);
}

export function changeSetProfession(
  e: ChangeEvent<HTMLInputElement>,
  setProfession: any
) {
  setProfession(e.target.value);
}

// validate inputs

export function validateInputName(
  name: string,
  setSpanName: any,
  setNameValid: any
) {
  if (!name) {
    setSpanName('o campo "Nome" não pode estar vazio!');
    setNameValid(false);
  } else if (name.length >= 1 && name.length < 3) {
    setSpanName("O campo 'Nome' não pode ter menos de 3 caracteres!");
    setNameValid(false);
  } else if (containsSpecialChars(name) == true) {
    setSpanName("O campo 'Nome' não pode ter caracteres especiais!");
    setNameValid(false);
  } else {
    setSpanName("");
    setNameValid(true);
  }
}

export function validateInputProfession(
  profession: string,
  setSpanProfession: any,
  setProfessionValid: any
) {
  if (!profession) {
    setSpanProfession('o campo "Profissão" não pode estar vazio!');
    setProfessionValid(false);
  } else if (profession.length >= 1 && profession.length < 2) {
    setSpanProfession(
      "O campo 'Profissão' não pode ter menos de 3 caracteres!"
    );
    setProfessionValid(false);
  } else if (containsSpecialChars(profession) == true) {
    setSpanProfession("O campo 'Profissão' não pode ter caracteres especiais!");
    setProfessionValid(false);
  } else if (containsNumbers(profession) == true) {
    setSpanProfession("O campo 'Profissão' não pode ter números!");
    setProfessionValid(false);
  } else {
    setSpanProfession("");
    setProfessionValid(true);
  }
}

export function validateInputAge(
  age: number,
  setAgeValid: any,
  setSpanAge: any
) {
  if (!age) {
    setSpanAge("O campo 'Idade' não pode estar vazio");
    setAgeValid(false);
  } else if (age && age > 120) {
    setAgeValid(false);
    setSpanAge("Desculpe, a idade máxima é de 120 anos.");
  } else if (age && age < 10) {
    setAgeValid(false);
    setSpanAge("Desculpe, a idade mínima é de 10 anos.");
  } else {
    setAgeValid(true);
    setSpanAge("");
  }
}

export function addAllErrorsToAlert(
  nameValid: boolean,
  ageValid: boolean,
  professionValid: boolean,
  sexValid: boolean,
  avatarValid: boolean,
  errors: any,
  setErrors: any
) {
  let arrayErrors = [];

  if (!nameValid) {
    arrayErrors.push("Nome");
  }
  if (!ageValid) {
    arrayErrors.push("Idade");
  }

  if (!professionValid) {
    arrayErrors.push("Profissão");
  }

  if (!sexValid) {
    arrayErrors.push("Sexo");
  }

  if (!avatarValid) {
    arrayErrors.push("Avatar");
  }

  const str = arrayErrors.toString();

  const newStr = str.replace(/,/g, " ");

  console.log(str);
  console.log(newStr);
}

// Others

export function containsSpecialChars(str: string) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

export function containsNumbers(str: string) {
  const specialChars = /[0-9]/g;
  return specialChars.test(str);
}

export function setGender(e: any, setSex: any, setSexValid: any) {
  setSex(e.target.value);
  setSexValid(true);
}

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

export function choseImgUser(
  e: any,
  setImgUserSelected: any,
  setImgUser1: any,
  setImgUser2: any,
  setImgUser3: any,
  setImgUser4: any,
  setImgUser5: any,
  setImgUser6: any,
  setavatarValid: any
) {
  if (e.target.alt == "user1") {
    setImgUserSelected(e.target.src);
    setavatarValid(true);
    setImgUser1(true);
    setImgUser2(false);
    setImgUser3(false);
    setImgUser4(false);
    setImgUser5(false);
    setImgUser6(false);
  } else if (e.target.alt == "user2") {
    setImgUserSelected(e.target.src);
    setavatarValid(true);
    setImgUser1(false);
    setImgUser2(true);
    setImgUser3(false);
    setImgUser4(false);
    setImgUser5(false);
    setImgUser6(false);
  } else if (e.target.alt == "user3") {
    setImgUserSelected(e.target.src);
    setavatarValid(true);
    setImgUser1(false);
    setImgUser2(false);
    setImgUser3(true);
    setImgUser4(false);
    setImgUser5(false);
    setImgUser6(false);
  } else if (e.target.alt == "user4") {
    setImgUserSelected(e.target.src);
    setavatarValid(true);
    setImgUser1(false);
    setImgUser2(false);
    setImgUser3(false);
    setImgUser4(true);
    setImgUser5(false);
    setImgUser6(false);
  } else if (e.target.alt == "user5") {
    setImgUserSelected(e.target.src);
    setavatarValid(true);
    setImgUser1(false);
    setImgUser2(false);
    setImgUser3(false);
    setImgUser4(false);
    setImgUser5(true);
    setImgUser6(false);
  } else if (e.target.alt == "user6") {
    setImgUserSelected(e.target.src);
    setavatarValid(true);
    setImgUser1(false);
    setImgUser2(false);
    setImgUser3(false);
    setImgUser4(false);
    setImgUser5(false);
    setImgUser6(true);
  }
}
