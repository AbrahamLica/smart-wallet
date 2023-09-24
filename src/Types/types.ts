export type DataType = {
  id?: number;
  date?: any;
  category?: string;
  title?: string;
  value?: number;
  expense?: number;
  income?: number;
};

export type UserType = {
  name: string;
  age: number;
  profession: string;
  sex: string;
  img: string;
};

export type OthersType = {
  menuIsOpen: boolean;
  selectedManualMonth: any;
  selectedManualYear: any;
  completeDate: any;
};

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
  others: OthersType;
};

export type UserImagesProps = {
  user1: string;
  user2: string;
  user3: string;
  user4: string;
  user5: string;
  user6: string;
};

export type FinancialSummaryProps = {
  colorText?: string;
  width?: string;
  border?: string;
  margin?: string;
};
