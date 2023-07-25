import { useReducer } from "react";
import { ActionType, DataType } from "./types";

export const reducerInitialState: DataType[] = [];

export function reducer(state: DataType[], action: ActionType) {
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
