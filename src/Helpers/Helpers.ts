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

export function changeValueData(e: ChangeEvent<HTMLDataElement>, setData: any) {
  setData(e.target.value);
}

export function changeValueCategoria(
  e: ChangeEvent<HTMLSelectElement>,
  setCategoria: any
) {
  setCategoria(e.target.value);
}

export function changeValueTitulo(
  e: ChangeEvent<HTMLInputElement>,
  setTitulo: any
) {
  setTitulo(e.target.value);
}

export function changeValueValor(
  e: ChangeEvent<HTMLInputElement>,
  setValor: any
) {
  setValor(e.target.valueAsNumber);
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
  avatarValid: boolean
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
    arrayErrors.push("Selecione o sexo");
  }

  if (!avatarValid) {
    arrayErrors.push("Selecione o seu avatar");
  }

  const str = arrayErrors.toString();

  const newStr = str.replace(/,/g, " | ");

  alert(`Por favor, verifique os seguintes itens:
    ${newStr}
  `);
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

  // Calcula despesa
  for (let i = 0; i < state.data.length; i++) {
    if (state.data[i].despesa) {
      totalDespesaFormatado += state.data[i].despesa;
    }
  }
  setDespesa(totalDespesaFormatado.toFixed(2));

  // Calcula Receita
  for (let i = 0; i < state.data.length; i++) {
    if (state.data[i].receita) {
      totalReceitaFormatado += state.data[i].receita;
    }
  }
  setReceita(totalReceitaFormatado.toFixed(2));

  // Calcula Balanço
  totalBalanco = totalReceitaFormatado - totalDespesaFormatado;

  setBalanco(totalBalanco.toFixed(2));
}

export function Add(
  data: any,
  categoria: any,
  titulo: any,
  valor: number,
  setData: any,
  setValor: any,
  setTitulo: any,
  dispatch: any
) {
  let day = 0;
  let month = 0;
  let year = 0;
  let dateFullFixed = "";

  if (data) {
    day = data.slice(8, 10);
    month = data.slice(5, 7);
    year = data.slice(0, 4);
    dateFullFixed = `${day}/${month}/${year}`;
  }

  if (data == 0 || categoria == "" || titulo == "" || valor == 0) {
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
    setValor(0);
    setTitulo("");
  }
}

export function choseImgUser(
  e: any,
  setImgUserSelected: any,
  imageStates: any,
  img: any,
  setImageStates: any,
  setAvatarValid: any
) {
  const updatedImageStates = { ...imageStates };
  for (const user in updatedImageStates) {
    updatedImageStates[user] = false;
  }
  setImageStates(updatedImageStates);
  setImgUserSelected(e.target.src);
  setAvatarValid(true);
  setImageStates({ ...updatedImageStates, [img]: true });
}

export function formatarMoeda(valor: any) {
  const valorFormatado = parseFloat(valor).toFixed(2);
  return `R$ ${valorFormatado.replace(".", ",").replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}`;
}
