import React, { useContext, useEffect, useState } from "react";
import * as C from "./styles";
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
    return itemMonth === state.others.selectedManualMonth;
  });

  function teste() {}

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
            </tr>
          </tbody>
        ))}
      </C.Table>
    </C.ContainerTable>
  );
};

export default index;
