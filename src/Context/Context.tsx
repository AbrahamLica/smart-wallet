import {
  ActionType,
  ChildrenType,
  ContextType,
  DataType,
  InitialStateContextType,
  UserType,
} from "../Types/types";
import { createContext, useReducer } from "react";

export const reducerDataInitialState: DataType[] = [];

export function reducerData(state: DataType[], action: ActionType) {
  switch (action.type) {
    case "CADASTRAR_DESPESA":
      let newState = [...state];
      newState.push({
        ...state,
        data: action.payload?.data,
        categoria: action.payload?.categoria,
        titulo: action.payload?.titulo,
        valor: action.payload.valor,
        despesa: action.payload.despesa,
      });
      return newState;
      break;

    case "CADASTRAR_RECEITA":
      let newStatee = [...state];
      newStatee.push({
        data: action.payload?.data,
        categoria: action.payload?.categoria,
        titulo: action.payload?.titulo,
        valor: action.payload.valor,
        receita: action.payload.receita,
      });
      return newStatee;
      break;
  }

  return state;
}

//////////////////////////////////////////////////////////////////////

export const reducerUserInitialState: UserType = {
  name: "",
  age: 0,
  profession: "",
  sex: "",
  img: "",
};

export function reducerUser(state: UserType, action: ActionType) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        name: action.payload?.name,
        age: action.payload?.age,
        profession: action.payload?.profession,
        sex: action.payload?.sex,
        img: action.payload?.img,
      };
      break;
  }

  return state;
}

/////////////////////////  CONTEXT ///////////////////////////////////

const ContextInitialState = {
  data: reducerDataInitialState,
  user: reducerUserInitialState,
};

export const Context = createContext<ContextType>({
  state: ContextInitialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
  data: reducerData(state.data, action),
  user: reducerUser(state.user, action),
});

export function ContextProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(mainReducer, ContextInitialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
