import { ChangeEvent, useState } from "react";
import * as C from "./styles";
import * as G from "../../../Helpers/GeneralStyles";
import { useEffect, useContext } from "react";
import { Context } from "../../../Context/Context";
import { AddNewFinance } from "../../../Helpers/Helpers";
import { changeValueCategory } from "../../../Helpers/Helpers";
import { changeValueDate } from "../../../Helpers/Helpers";
import { changeValueTitle } from "../../../Helpers/Helpers";
import { changeValue } from "../../../Helpers/Helpers";
import dateIcon from "../../../img/date.png";
import titleIcon from "../../../img/title.png";
import categoryIcon from "../../../img/category.png";
import valueIcon from "../../../img/value.png";

const FormInformations = () => {
  const { state, dispatch } = useContext(Context);
  const [date, setDate] = useState<any>(0);
  const [category, setCategory] = useState<string>("Despesa");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setValue(0);
    setCategory("Despesa");
    setTitle("");
  }, [state.data, dispatch]);

  const list = [
    { id: 1, name: "Despesa" },
    { id: 2, name: "Extra" },
    { id: 3, name: "Salário" },
  ];

  function handleAdd() {
    AddNewFinance(
      date,
      category,
      title,
      value,
      setDate,
      setValue,
      setTitle,
      dispatch
    );
  }

  return (
    <C.ContainerInformations>
      <C.ContainerSingleInformation>
        <G.Container displayFlex alignItems="center">
          <C.TitleInformation>Data</C.TitleInformation>
          <img src={dateIcon} alt="dateIcon" width={30} />
        </G.Container>

        <C.Input
          type="date"
          onChange={(e) => changeValueDate(e, setDate)}
          value={date}
          name="date"
          autoComplete="on"
        ></C.Input>
      </C.ContainerSingleInformation>

      <C.ContainerSingleInformation>
        <G.Container displayFlex alignItems="center">
          <C.TitleInformation>Categoria</C.TitleInformation>
          <img src={categoryIcon} alt="categoryIcon" width={30} />
        </G.Container>
        <C.Select
          value={category}
          onChange={(e) => changeValueCategory(e, setCategory)}
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
        <G.Container displayFlex alignItems="center">
          <C.TitleInformation>Título</C.TitleInformation>
          <img src={titleIcon} alt="titleIcon" width={30} />
        </G.Container>
        <C.Input
          type="text"
          onChange={(e) => changeValueTitle(e, setTitle)}
          value={title}
          name="title"
          autoComplete="on"
        ></C.Input>
      </C.ContainerSingleInformation>

      <C.ContainerSingleInformation>
        <G.Container displayFlex alignItems="center">
          <C.TitleInformation>Valor</C.TitleInformation>
          <img src={valueIcon} alt="valueIcon" width={30} />
        </G.Container>
        <C.Input
          type="number"
          onChange={(e) => changeValue(e, setValue)}
          value={value}
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
