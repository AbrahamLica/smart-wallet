import {
  ActionType,
  ChildrenType,
  ContextType,
  DataType,
  InitialStateContextType,
  OthersType,
  UserType,
} from "../Types/types";
import { createContext, useReducer } from "react";

const initialDataState = localStorage.getItem("financeData");

const reducerDataInitialState: DataType[] = initialDataState
  ? JSON.parse(initialDataState)
  : [];

export function reducerData(state: DataType[], action: ActionType) {
  switch (action.type) {
    case "CADASTRAR_DESPESA":
      let newState = [...state];
      newState.push({
        ...state,
        id: action.payload?.id,
        date: action.payload?.date,
        category: action.payload?.category,
        title: action.payload?.title,
        value: action.payload.value,
        expense: action.payload.expense,
      });
      localStorage.setItem("financeData", JSON.stringify(newState));
      return newState;
      break;

    case "CADASTRAR_RECEITA":
      let newStatee = [...state];
      newStatee.push({
        id: action.payload?.id,
        date: action.payload?.date,
        category: action.payload?.category,
        title: action.payload?.title,
        value: action.payload.value,
        income: action.payload.income,
      });
      localStorage.setItem("financeData", JSON.stringify(newStatee));
      return newStatee;
      break;

    case "DELETE_ITEM":
      let clonedArray = [...state];
      let filteredArray = clonedArray.filter(
        (item) => item.id !== action.payload?.id
      );
      localStorage.setItem("financeData", JSON.stringify(filteredArray));
      return filteredArray;
      break;
  }

  return state;
}

//////////////////////////////////////////////////////////////////////

const initialUserDataState = localStorage.getItem("userData");
const reducerUserInitialState: UserType = initialUserDataState
  ? JSON.parse(initialUserDataState)
  : {
      name: "",
      age: 0,
      profession: "",
      sex: "",
      img: "",
    };

export function reducerUser(state: UserType, action: ActionType) {
  switch (action.type) {
    case "LOG_IN":
      const newState = {
        ...state,
        name: action.payload?.name,
        age: action.payload?.age,
        profession: action.payload?.profession,
        sex: action.payload?.sex,
        img: action.payload?.img,
      };
      localStorage.setItem("userData", JSON.stringify(newState));
      return newState;
  }

  return state;
}

//////////////////////////////////////////////////////////////////////

export const reducerOthersInitialState: OthersType = {
  menuIsOpen: false,
  selectedManualMonth: "",
  selectedManualYear: "",
  completeDate: "",
};

export function reducerOthers(state: OthersType, action: ActionType) {
  switch (action.type) {
    case "OPEN_MENU":
      return {
        ...state,
        menuIsOpen: action.payload.menuIsOpen,
      };
      break;

    case "CHANGE_MANUAL_DATE":
      return {
        ...state,
        selectedManualMonth: action.payload.selectedManualMonth,
        selectedManualYear: action.payload.selectedManualYear,
      };
      break;
  }

  return state;
}

/////////////////////////  CONTEXT ///////////////////////////////////

const ContextInitialState = {
  data: reducerDataInitialState,
  user: reducerUserInitialState,
  others: reducerOthersInitialState,
};

export const Context = createContext<ContextType>({
  state: ContextInitialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
  data: reducerData(state.data, action),
  user: reducerUser(state.user, action),
  others: reducerOthers(state.others, action),
});

export function ContextProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(mainReducer, ContextInitialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
