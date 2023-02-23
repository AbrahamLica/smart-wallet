export type ActionType = {
    type: string;
    payload: {
      [key: string]: any;
    };
  };

  export type DataType = {
    data?: any;
    categoria?: string;
    titulo?: string;
    valor?: number;
    despesa?: number;
    receita?: number;
  };