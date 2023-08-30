import * as C from "./HomeStyles";
import "./styles.css";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import Header from "../Header/Header";

function App() {
  const [data, setData] = useState<any>(0);
  const [categoria, setCategoria] = useState<any>("Despesa");
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState<any>();
  const [balanco, setBalanco] = useState<number>();
  const [despesa, setDespesa] = useState<any>();
  const [receita, setReceita] = useState<any>();

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  var calcDespesa: number = 0;
  var calcReceita: number = 0;
  var despesaFormatada: number = 1;

  useEffect(() => {
    for (let i = 0; i < state.length; i++) {
      if (state[i].despesa) {
        calcDespesa += state[i].despesa!;
      }
    }

    for (let i = 0; i < state.length; i++) {
      if (state[i].receita) {
        calcReceita += state[i].receita!;
      }
    }

    var resultadoReceita: any = calcReceita - calcDespesa;
    var newresultadoReceita: any = resultadoReceita.toFixed(2);

    setDespesa(calcDespesa.toFixed(2));
    setReceita(calcReceita.toFixed(2));
    setBalanco(newresultadoReceita);
  }, [valor, balanco, despesa, receita, state.length]);

  const list = [
    { id: 1, name: "Despesa" },
    { id: 2, name: "Extra" },
    { id: 3, name: "Salário" },
  ];

  function changeValueData(e: ChangeEvent<HTMLDataElement>) {
    setData(e.target.value);
  }

  function changeValueCategoria(e: ChangeEvent<HTMLSelectElement>) {
    setCategoria(e.target.value);
  }

  function changeValueTitulo(e: ChangeEvent<HTMLInputElement>) {
    setTitulo(e.target.value);
  }

  function changeValueValor(e: ChangeEvent<HTMLInputElement>) {
    setValor(e.target.valueAsNumber);
  }

  function Add() {
    if (data == 0 || categoria == "" || titulo == "" || valor == 0) {
      alert("Por favor, preencha todos os dados antes de adicionar!");
    } else {
      if (categoria == "Despesa") {
        dispatch({
          type: "CADASTRAR_DESPESA",
          payload: {
            data: data,
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
            data: data,
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

  return (
    <C.GlobalContainer>
      <Header></Header>

      <C.MainContainer>
        <C.Container
          displayFlex
          justifyContent="space-between"
          width="100%"
          padding="20px"
          border="1px solid black"
          borderRadius="10px"
        >
          <C.Container displayFlex column>
            <C.Text bold fontSize="23px" color="black">
              Receita
            </C.Text>
            <C.Text bold fontSize="18px" color="black">
              R$ {receita}
            </C.Text>
          </C.Container>

          <C.Container displayFlex column>
            <C.Text bold fontSize="23px" color="black">
              Despesa
            </C.Text>
            <C.Text bold fontSize="18px" color="black">
              R$ {despesa}
            </C.Text>
          </C.Container>

          <C.Container displayFlex column>
            <C.Text bold fontSize="23px" color="black">
              Balanço
            </C.Text>
            <C.Text bold fontSize="18px" color="black">
              R$ {balanco}
            </C.Text>
          </C.Container>
        </C.Container>

        <C.Container
          displayFlex
          justifyContent="space-between"
          alignItems="flex-end"
          width="100%"
          padding="20px"
          border="1px solid black"
          borderRadius="10px"
          margin="15px 0px"
        >
          <C.Container displayFlex column>
            <C.Text bold fontSize="23px" color="black">
              Data
            </C.Text>
            <C.Input
              type="date"
              onChange={changeValueData}
              value={data}
            ></C.Input>
          </C.Container>

          <C.Container displayFlex column>
            <C.Text bold fontSize="23px" color="black">
              Categoria
            </C.Text>
            <C.Select value={categoria} onChange={changeValueCategoria}>
              {list.map((item, index) => (
                <C.Option value={item.name}>{item.name}</C.Option>
              ))}
            </C.Select>
          </C.Container>

          <C.Container displayFlex column>
            <C.Text bold fontSize="23px" color="black">
              Título
            </C.Text>
            <C.Input
              type="text"
              onChange={changeValueTitulo}
              value={titulo}
            ></C.Input>
          </C.Container>

          <C.Container displayFlex column>
            <C.Text bold fontSize="23px" color="black">
              Valor
            </C.Text>
            <C.Input
              type="number"
              onChange={changeValueValor}
              value={valor}
            ></C.Input>
          </C.Container>

          <C.Button onClick={Add}>Adicionar</C.Button>

        </C.Container>

        <C.Container
          width="100%"
          padding="10px"
          border="1px solid black"
          borderRadius="10px"
        >
          <table>
            <tr>
              <th>Data</th>
              <th>Categoria</th>
              <th>Título</th>
              <th>Valor</th>
            </tr>
            {state.map((item, index) => (
              <tbody>
                <tr>
                  <td>{item.data}</td>
                  <td>{item.categoria}</td>
                  <td>{item.titulo}</td>
                  <td>{item.valor}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </C.Container>
      </C.MainContainer>
    </C.GlobalContainer>
  );
}

export default App;
