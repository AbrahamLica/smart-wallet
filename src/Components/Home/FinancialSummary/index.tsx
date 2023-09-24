import { useContext, useEffect, useState } from "react";
import * as C from "./styles";
import * as G from "../../../Helpers/GeneralStyles";
import { calculateEverything } from "../../../Helpers/Helpers";
import { Context } from "../../../Context/Context";
import { formatCurrency } from "../../../Helpers/Helpers";
import { FinancialSummaryProps } from "../../../Types/types";
import incomeIcon from "../../../img/income.png";
import expenseIcon from "../../../img/expense.png";
import balanceIcon from "../../../img/balance.png";

const index: React.FC<FinancialSummaryProps> = (props) => {
  const { state, dispatch } = useContext(Context);
  const [balance, setBalance] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);

  useEffect(() => {
    calculateEverything(setExpense, setIncome, setBalance, state);
  }, [state.data, state.others.selectedManualMonth]);

  return (
    <C.ContainerFinancialSummary
      color={props.colorText}
      width={props.width}
      border={props.border}
      margin={props.margin}
    >
      <C.ContainerSingleInformation>
        <G.Container displayFlex alignItems="center">
          <C.TitleInformation>Receita</C.TitleInformation>
          <img src={incomeIcon} width={45} alt="income" />
        </G.Container>
        <C.Information>{formatCurrency(income)}</C.Information>
      </C.ContainerSingleInformation>

      <C.ContainerSingleInformation>
        <G.Container displayFlex alignItems="center">
          <C.TitleInformation>Despesa</C.TitleInformation>
          <img src={expenseIcon} width={45} alt="income" />
        </G.Container>
        <C.Information>{formatCurrency(expense)}</C.Information>
      </C.ContainerSingleInformation>

      <C.ContainerSingleInformation>
        <G.Container displayFlex alignItems="center">
          <C.TitleInformation>Balanço</C.TitleInformation>
          <img src={balanceIcon} alt="balanceIcon" width={40} />
        </G.Container>
        {balance > 0 ? (
          <C.Information style={{ color: "green" }}>
            {formatCurrency(balance)}
          </C.Information>
        ) : balance < 0 ? (
          <C.Information style={{ color: "red" }}>
            {formatCurrency(balance)}
          </C.Information>
        ) : (
          <C.Information style={{ color: "black" }}>
            {formatCurrency(balance)}
          </C.Information>
        )}
      </C.ContainerSingleInformation>
    </C.ContainerFinancialSummary>
  );
};

export default index;
