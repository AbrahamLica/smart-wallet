import { ChangeEvent, useState } from "react";
import * as C from "./styles";
import { useEffect, useContext } from "react";
import { Context } from "../../../Context/Context";
import { formatMoney } from "../../../Helpers/Helpers";
import { Add } from "../../../Helpers/Helpers";

const FormInformations = () => {
  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState<any>(0);
  const [categoria, setCategoria] = useState<any>("Despesa");
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState<string>("0,00");

  useEffect(() => {
    setValor("0,00");
    setCategoria("Despesa");
    setTitulo("");
  }, [state.data, dispatch]);

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
    setValor(formatMoney(e.target.value));
  }

  return (
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

      <C.ButtonAdd
        onClick={() =>
          Add(
            data,
            categoria,
            titulo,
            valor,
            setData,
            setValor,
            setTitulo,
            dispatch
          )
        }
        type="button"
      >
        Adicionar
      </C.ButtonAdd>
    </C.ContainerInformations>
  );
};

export default FormInformations;
