import { ChangeEvent, useState } from "react";
import * as C from "./styles";
import { useEffect, useContext } from "react";
import { Context } from "../../../Context/Context";
import { Add } from "../../../Helpers/Helpers";
import { changeValueCategoria } from "../../../Helpers/Helpers";
import { changeValueData } from "../../../Helpers/Helpers";
import { changeValueTitulo } from "../../../Helpers/Helpers";
import { changeValueValor } from "../../../Helpers/Helpers";

const FormInformations = () => {
  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState<any>(0);
  const [categoria, setCategoria] = useState<any>("Despesa");
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState<number>(0);

  useEffect(() => {
    setValor(0);
    setCategoria("Despesa");
    setTitulo("");
  }, [state.data, dispatch]);

  const list = [
    { id: 1, name: "Despesa" },
    { id: 2, name: "Extra" },
    { id: 3, name: "Salário" },
  ];

  function handleAdd() {
    Add(
      state.others.completeDate,
      data,
      categoria,
      titulo,
      valor,
      setData,
      setValor,
      setTitulo,
      dispatch
    );
  }

  return (
    <C.ContainerInformations>
      <C.ContainerSingleInformation>
        <C.TitleInformation>Data</C.TitleInformation>
        <C.Input
          type="date"
          onChange={(e) => changeValueData(e, setData)}
          value={data}
          name="date"
          autoComplete="on"
        ></C.Input>
      </C.ContainerSingleInformation>

      <C.ContainerSingleInformation>
        <C.TitleInformation>Categoria</C.TitleInformation>
        <C.Select
          value={categoria}
          onChange={(e) => changeValueCategoria(e, setCategoria)}
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
          onChange={(e) => changeValueTitulo(e, setTitulo)}
          value={titulo}
          name="title"
          autoComplete="on"
        ></C.Input>
      </C.ContainerSingleInformation>

      <C.ContainerSingleInformation>
        <C.TitleInformation>Valor</C.TitleInformation>
        <C.Input
          type="number"
          onChange={(e) => changeValueValor(e, setValor)}
          value={valor}
          name="value"
          autoComplete="on"
        ></C.Input>
      </C.ContainerSingleInformation>

      <C.ButtonAdd onClick={handleAdd} type="button">
        Adicionar
      </C.ButtonAdd>
    </C.ContainerInformations>
  );
};

export default FormInformations;
