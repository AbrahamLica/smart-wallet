import React, { useContext, useEffect, useState } from "react";
import * as C from "./styles";
import * as G from "../../../Helpers/GeneralStyles";
import { Context } from "../../../Context/Context";
import { formatarMoeda } from "../../../Helpers/Helpers";
import { formatarData } from "../../../Helpers/Helpers";

const index = () => {
  const { state, dispatch } = useContext(Context);
  const [formatedDate, setFormatedDate] = useState();

  useEffect(() => {}, []);

  const filteredItems = state.data.filter((item) => {
    const itemDate = new Date(item.data);
    const itemMonth = itemDate.getMonth() + 1;
    const itemYear = itemDate.getFullYear();
    return (
      itemMonth === state.others.selectedManualMonth &&
      itemYear === state.others.selectedManualYear
    );
  });

  return (
    <C.ContainerTable>
      <C.Table>
        <thead>
          <tr>
            <C.Th>Data</C.Th>
            <C.Th>Categoria</C.Th>
            <C.Th>Título</C.Th>
            <C.Th>Valor</C.Th>
          </tr>
        </thead>
        {filteredItems.map((item, index) => (
          <tbody key={index}>
            <tr>
              <C.Td>{formatarData(item.data)}</C.Td>
              <C.Td>{item.categoria}</C.Td>
              <C.Td>{item.titulo}</C.Td>
              <C.Td>{formatarMoeda(item.valor)}</C.Td>
              <C.ImgDelete></C.ImgDelete>
            </tr>
          </tbody>
        ))}
      </C.Table>
    </C.ContainerTable>
  );
};

export default index;
