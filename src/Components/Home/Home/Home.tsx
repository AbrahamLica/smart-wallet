import * as C from "./styles";
import Header from "../../Header/Header/Header";
import FinancialSummary from "../FinancialSummary";
import FormInformations from "../FormInformations";
import Table from "../Table/index";
import CurrentDate from "../CurrentDate";

function App() {
  return (
    <C.MainContainer>
      <Header></Header>

      <C.FormContainer>
        <CurrentDate></CurrentDate>

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
