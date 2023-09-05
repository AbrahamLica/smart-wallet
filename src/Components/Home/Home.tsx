import * as C from "./HomeStyles";
import { ChangeEvent, useEffect, useState, useContext } from "react";
import { Context } from "../../Context/Context";
import Header from "../Header/Header";

function App() {
  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState<any>(0);
  const [categoria, setCategoria] = useState<any>("Despesa");
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState<string>("0,00");
  const [balanco, setBalanco] = useState<number>(0);
  const [despesa, setDespesa] = useState<any>(0);
  const [receita, setReceita] = useState<number>(0);

  var calcDespesa: any = 0;
  var calcReceita: any = 0;
  var array: any = [];
  var totalDespesa = 0;

  function calcularDespesaTotal() {
    

    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].despesa) {
        totalDespesa += parseFloat(
          state.data[i].despesa.slice(2).replace(",", ".")
        );
      }
    }

    setDespesa(totalDespesa);
  }

  useEffect(() => {
    calcularDespesaTotal();
    setValor("0,00");
    setCategoria("Despesa");
    setTitulo(""); //
  }, [state.data, dispatch]);

  const list = [
    { id: 1, name: "Despesa" },
    { id: 2, name: "Extra" },
    { id: 3, name: "Salário" },
  ];

  const formatMoney = (value: any) => {
    if (typeof value !== "string") {
      return "0,00"; // ou algum valor padrão apropriado
    }

    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = (parseFloat(numericValue) / 100).toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
      }
    );

    return formattedValue;
  };

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
    setValor(formatMoney(e.target.value));
  }

  function Add() {
    let day = data.slice(8, 10);
    let month = data.slice(5, 7);
    let year = data.slice(0, 4);
    let dateFullFixed = `${day}/${month}/${year}`;

    if (data == 0 || categoria == "" || titulo == "" || valor == "0,00") {
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
      setValor("0,00");
      setTitulo("");
    }
  }

  function teste() {
    console.log(state.data, despesa, totalDespesa);
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
              type="string"
              onChange={changeValueValor}
              value={valor}
              name="value"
              autoComplete="on"
            ></C.Input>
          </C.ContainerSingleInformation>

          <C.ButtonAdd onClick={Add} type="button">
            Adicionar
          </C.ButtonAdd>

          <button onClick={teste}>teste</button>
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
                <C.Th>Data</C.Th>
                <C.Th>Categoria</C.Th>
                <C.Th>Título</C.Th>
                <C.Th>Valor</C.Th>
              </tr>
            </thead>
            {state.data.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <C.Td>{item.data}</C.Td>
                  <C.Td>{item.categoria}</C.Td>
                  <C.Td>{item.titulo}</C.Td>
                  <C.Td>{formatMoney(item.valor)}</C.Td>
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
