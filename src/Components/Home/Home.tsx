import * as C from "./HomeStyles";
import "./styles.css";
import { ChangeEvent, useEffect, useState, useContext } from "react";
import { Context } from "../../Context/Context";
import Header from "../Header/Header";

function App() {
  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState<any>(0);
  const [categoria, setCategoria] = useState<any>("Despesa");
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState<any>("");
  const [balanco, setBalanco] = useState<number>(0);
  const [despesa, setDespesa] = useState<number>(0);
  const [receita, setReceita] = useState<number>(0);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  var calcDespesa: number = 0;
  var calcReceita: number = 0;
  var despesaFormatada: number = 1;

  useEffect(() => {
    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].despesa) {
        calcDespesa += state.data[i].despesa!;
      }
    }

    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].receita) {
        calcReceita += state.data[i].receita!;
      }
    }

    var resultadoReceita: any = calcReceita - calcDespesa;
    var newresultadoReceita: any = resultadoReceita.toFixed(2);

    setDespesa(calcDespesa.toFixed(2));
    setReceita(calcReceita.toFixed(2));
    setBalanco(newresultadoReceita);
  }, [valor, balanco, despesa, receita, state.data.length]);

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
    <C.MainContainer>
      <Header></Header>

      <C.FormContainer>
        <C.ContainerCategory>
          <C.ContainerSingleInformation>
            <C.TitleInformation>Receita</C.TitleInformation>
            <C.Information>R$ {receita}</C.Information>
          </C.ContainerSingleInformation>

          <C.ContainerSingleInformation>
            <C.TitleInformation>Despesa</C.TitleInformation>
            <C.Information>R$ {despesa}</C.Information>
          </C.ContainerSingleInformation>

          <C.ContainerSingleInformation>
            <C.TitleInformation>Balanço</C.TitleInformation>
            <C.Information>R$ {balanco}</C.Information>
          </C.ContainerSingleInformation>
        </C.ContainerCategory>

        <C.ContainerInformations>
          <C.ContainerSingleInformation>
            <C.TitleInformation>Data</C.TitleInformation>
            <C.Input
              type="date"
              onChange={changeValueData}
              value={data}
              name="date"
              autoComplete="on"
            ></C.Input>
          </C.ContainerSingleInformation>

          <C.ContainerSingleInformation>
            <C.TitleInformation>Categoria</C.TitleInformation>
            <C.Select
              value={categoria}
              onChange={changeValueCategoria}
              name="category"
            >
              {list.map((item, index) => (
                <C.Option value={item.name} key={index}>
                  {item.name}
                </C.Option>
              ))}
            </C.Select>
          </C.ContainerSingleInformation>

          <C.ContainerSingleInformation>
            <C.TitleInformation>Título</C.TitleInformation>
            <C.Input
              type="text"
              onChange={changeValueTitulo}
              value={titulo}
              name="title"
              autoComplete="on"
            ></C.Input>
          </C.ContainerSingleInformation>

          <C.ContainerSingleInformation>
            <C.TitleInformation>Valor</C.TitleInformation>
            <C.Input
              type="number"
              onChange={changeValueValor}
              value={valor}
              name="value"
              autoComplete="on"
            ></C.Input>
          </C.ContainerSingleInformation>

          <C.ButtonAdd onClick={Add} type="button">
            Adicionar
          </C.ButtonAdd>
        </C.ContainerInformations>

        <C.Container
          width="100%"
          padding="10px"
          border="1px solid black"
          borderRadius="10px"
        >
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Categoria</th>
                <th>Título</th>
                <th>Valor</th>
              </tr>
            </thead>
            {state.data.map((item, index) => (
              <tbody key={index}>
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
      </C.FormContainer>
    </C.MainContainer>
  );
}

export default App;
