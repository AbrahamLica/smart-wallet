import { ChangeEvent, Dispatch, SetStateAction } from "react";

// ...

// change input functions

export function changeSetName(
  e: ChangeEvent<HTMLInputElement>,
  setName: Dispatch<SetStateAction<string>>
) {
  setName(e.target.value);
}

export function changeSetAge(
  e: ChangeEvent<HTMLInputElement>,
  setAge: Dispatch<SetStateAction<number>>,
  setAgeValid: Dispatch<SetStateAction<boolean>>
) {
  setAge(e.target.valueAsNumber);
  setAgeValid(true);
}

export function changeSetProfession(
  e: ChangeEvent<HTMLInputElement>,
  setProfession: Dispatch<SetStateAction<string>>
) {
  setProfession(e.target.value);
}

export function changeValueDate(
  e: ChangeEvent<HTMLDataElement>,
  setDate: Dispatch<SetStateAction<any>>
) {
  setDate(e.target.value);
}

export function changeValueCategory(
  e: ChangeEvent<HTMLSelectElement>,
  setCategory: Dispatch<SetStateAction<any>>
) {
  setCategory(e.target.value);
}

export function changeValueTitle(
  e: ChangeEvent<HTMLInputElement>,
  setTitle: Dispatch<SetStateAction<string>>
) {
  setTitle(e.target.value);
}

export function changeValue(
  e: ChangeEvent<HTMLInputElement>,
  setValue: Dispatch<SetStateAction<number>>
) {
  setValue(e.target.valueAsNumber);
}

// validate inputs

export function validateInputName(
  name: string,
  setSpanName: Dispatch<SetStateAction<string>>,
  setNameValid: Dispatch<SetStateAction<boolean>>
) {
  if (!name) {
    setSpanName('o campo "Nome" não pode estar vazio!');
    setNameValid(false);
  } else if (name.length >= 1 && name.length < 3) {
    setSpanName("O campo 'Nome' não pode ter menos de 3 caracteres!");
    setNameValid(false);
  } else if (containsSpecialChars(name) === true) {
    setSpanName("O campo 'Nome' não pode ter caracteres especiais!");
    setNameValid(false);
  } else {
    setSpanName("");
    setNameValid(true);
  }
}

export function validateInputProfession(
  profession: string,
  setSpanProfession: Dispatch<SetStateAction<string>>,
  setProfessionValid: Dispatch<SetStateAction<boolean>>
) {
  if (!profession) {
    setSpanProfession('o campo "Profissão" não pode estar vazio!');
    setProfessionValid(false);
  } else if (profession.length >= 1 && profession.length < 2) {
    setSpanProfession(
      "O campo 'Profissão' não pode ter menos de 3 caracteres!"
    );
    setProfessionValid(false);
  } else if (containsSpecialChars(profession) === true) {
    setSpanProfession("O campo 'Profissão' não pode ter caracteres especiais!");
    setProfessionValid(false);
  } else if (containsNumbers(profession) === true) {
    setSpanProfession("O campo 'Profissão' não pode ter números!");
    setProfessionValid(false);
  } else {
    setSpanProfession("");
    setProfessionValid(true);
  }
}

export function validateInputAge(
  age: number,
  setAgeValid: Dispatch<SetStateAction<boolean>>,
  setSpanAge: Dispatch<SetStateAction<string>>
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
  let arrayErrors: string[] = [];

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

  const str = arrayErrors.join(" | ");

  alert(`Por favor, verifique os seguintes itens:
    ${str}
  `);
}

// CRUD Functions

export function AddNewFinance(
  date: number,
  category: string,
  title: string,
  value: number,
  setDate: Dispatch<SetStateAction<number>>,
  setValue: Dispatch<SetStateAction<number>>,
  setTitle: Dispatch<SetStateAction<string>>,
  dispatch: Dispatch<any>
) {
  var id = Math.random();

  if (date == 0 || category === "" || title === "" || value === 0) {
    alert("Por favor, preencha todos os dados antes de adicionar!");
  } else {
    if (category === "Despesa") {
      dispatch({
        type: "CADASTRAR_DESPESA",
        payload: {
          id: id,
          date: date,
          category: category,
          title: title,
          value: value,
          expense: value,
        },
      });
    } else if (category === "Salário" || category === "Extra") {
      dispatch({
        type: "CADASTRAR_RECEITA",
        payload: {
          id: id,
          date: date,
          category: category,
          title: title,
          value: value,
          income: value,
        },
      });
    }
    setDate(0);
    setValue(0);
    setTitle("");

    const currentState = JSON.parse(
      localStorage.getItem("financeData") || "[]"
    );
    const updatedState = [
      ...currentState,
      { id, date, category, title, value },
    ];
    localStorage.setItem("financeData", JSON.stringify(updatedState));
  }
}

export function deleteItem(dispatch: Dispatch<any>, id: number) {
  if (window.confirm("Tem certeza que deseja excluir este item?")) {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        id: id,
      },
    });
  }
}

//Date Functions

export const formatDate = (date: number) => {
  const dateObj = new Date(date);
  const dia = String(dateObj.getDate() + 1).padStart(2, "0");
  const mes = String(dateObj.getMonth() + 1).padStart(2, "0"); // Os meses são zero indexados
  const ano = dateObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

export function showCurrentDate(
  setCurrentMonth: Dispatch<SetStateAction<number>>,
  setCurrentYear: Dispatch<SetStateAction<number>>,
  currentMonth: number,
  currentYear: number,
  dispatch: Dispatch<any>
) {
  const date = new Date();
  setCurrentMonth(date.getMonth() + 1);
  setCurrentYear(date.getFullYear());

  dispatch({
    type: "CHANGE_MANUAL_DATE",
    payload: {
      selectedManualMonth: currentMonth,
      selectedManualYear: currentYear,
    },
  });
}

export function changeManualDate(e: any, state: any, dispatch: Dispatch<any>) {
  let newMonth = state.others.selectedManualMonth;
  let newYear = state.others.selectedManualYear;

  if (e.target.alt === "left") {
    newMonth--;
    if (newMonth < 1) {
      newMonth = 12;
      newYear--;
    }
  } else {
    newMonth++;
    if (newMonth > 12) {
      newMonth = 1;
      newYear++;
    }
  }

  dispatch({
    type: "CHANGE_MANUAL_DATE",
    payload: {
      selectedManualMonth: newMonth,
      selectedManualYear: newYear,
    },
  });
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

export function setGender(
  e: ChangeEvent<HTMLInputElement>,
  setSex: Dispatch<SetStateAction<string>>,
  setSexValid: Dispatch<SetStateAction<boolean>>
) {
  setSex(e.target.value);
  setSexValid(true);
}

export function handleToggleMenu(dispatch: Dispatch<any>, state: any) {
  dispatch({
    type: "OPEN_MENU",
    payload: {
      menuIsOpen: state.others.menuIsOpen ? false : true,
    },
  });
}

export function calculateEverything(
  setExpense: Dispatch<SetStateAction<number>>,
  setIncome: Dispatch<SetStateAction<number>>,
  setBalance: Dispatch<SetStateAction<number>>,
  state: any
) {
  var totalDespesaFormatado: number = 0;
  var totalReceitaFormatado: number = 0;
  var totalBalanco: number = 0;

  const filteredItems = state.data.filter((item: any) => {
    const itemDate = new Date(item.date);
    const itemMonth = itemDate.getMonth() + 1;
    const itemYear = itemDate.getFullYear();
    return (
      itemMonth === state.others.selectedManualMonth &&
      itemYear === state.others.selectedManualYear
    );
  });

  // Calcula despesa
  for (let i = 0; i < filteredItems.length; i++) {
    if (filteredItems[i].expense) {
      totalDespesaFormatado += filteredItems[i].expense;
    }
  }
  setExpense(totalDespesaFormatado);

  // Calcula Receita
  for (let i = 0; i < filteredItems.length; i++) {
    if (filteredItems[i].income) {
      totalReceitaFormatado += filteredItems[i].income;
    }
  }
  setIncome(totalReceitaFormatado);

  // Calcula Balanço
  totalBalanco = totalReceitaFormatado - totalDespesaFormatado;

  setBalance(totalBalanco);
}

export function choseImgUser(
  e: ChangeEvent<HTMLInputElement>,
  setImgUserSelected: Dispatch<SetStateAction<string>>,
  imageStates: any,
  img: any,
  setImageStates: Dispatch<SetStateAction<Record<string, boolean>>>,
  setAvatarValid: Dispatch<SetStateAction<boolean>>
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

export function formatCurrency(value: any) {
  const valueFormatado = parseFloat(value).toFixed(2);
  return `R$ ${valueFormatado
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}`;
}
