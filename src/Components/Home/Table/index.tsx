import { useContext, useState } from "react";
import * as C from "./styles";
import * as G from "../../../Helpers/GeneralStyles";
import { Context } from "../../../Context/Context";
import { deleteItem, formatCurrency } from "../../../Helpers/Helpers";
import { formatDate } from "../../../Helpers/Helpers";
import trash from "../../../img/trash.png";
import empty from "../../../img/empty.png";

const index = () => {
  const { state, dispatch } = useContext(Context);
  const [formatedDate, setFormatedDate] = useState();

  const filteredItems = state.data.filter((item) => {
    const itemDate = new Date(item.date);
    const itemMonth = itemDate.getMonth() + 1;
    const itemYear = itemDate.getFullYear();
    return (
      itemMonth === state.others.selectedManualMonth &&
      itemYear === state.others.selectedManualYear
    );
  });

  return (
    <C.ContainerTable>
      {state.data.length ? (
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
                <C.Td>{formatDate(item.date)}</C.Td>
                <C.Td>{item.category}</C.Td>
                <C.Td>{item.title}</C.Td>
                <C.Td>{formatCurrency(item.value)}</C.Td>
                <C.ImgDelete
                  src={trash}
                  onClick={() => item.id && deleteItem(dispatch, item.id)}
                ></C.ImgDelete>
              </tr>
            </tbody>
          ))}
        </C.Table>
      ) : (
        <G.Container displayFlex column width="100%" alignItems="center">
          <G.Text>Não há nenhuma finança registrada ainda.</G.Text>
          <img src={empty} alt="empty_table" width={70} />
        </G.Container>
      )}
    </C.ContainerTable>
  );
};

export default index;
