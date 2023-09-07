export type DataType = { 
  data?: any;
  categoria?: string;
  titulo?: string;
  valor?: any;
  despesa?: any;
  receita?: any;
};

export type UserType = {
  name: string;
  age: number;
  profession: string;
  sex: string;
  img: string;
};

export type OthersType = {
  menuIsOpen: boolean
}

export type ActionType = {
  type: string;
  payload: {
    [key: string]: any;
  };
};

export type ChildrenType = {
  children: React.ReactNode;
};

export type ContextType = {
  state: InitialStateContextType;
  dispatch: React.Dispatch<any>;
};

export type InitialStateContextType = {
  data: DataType[];
  user: UserType;
  others: OthersType
};
