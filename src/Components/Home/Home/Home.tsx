import * as C from "./styles";
import { ChangeEvent, useEffect, useState, useContext } from "react";
import { Context } from "../../../Context/Context";
import Header from "../../Header/Header/Header";
import FinancialSummary from "../FinancialSummary";
import FormInformations from "../FormInformations";
import Table from "../Table/index";

function App() {
  const { state, dispatch } = useContext(Context);
  const [filteredList, setFilteredList] = useState();
  const [currentMonth, setCurrentMonth] = useState();

  return (
    <C.MainContainer>
      <Header></Header>

      <C.FormContainer>
        <FinancialSummary
          width="100%"
          colorText="black"
          border="1px solid black"
        ></FinancialSummary>

        <FormInformations></FormInformations>

        <Table></Table>
      </C.FormContainer>
    </C.MainContainer>
  );
}

export default App;
