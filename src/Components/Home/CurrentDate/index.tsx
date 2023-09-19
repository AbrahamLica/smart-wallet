import { useEffect, useState } from "react";
import * as C from "./styles";
import * as G from "../../../Helpers/GeneralStyles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import imgLeft from "../../../img/img-left.png";
import imgRight from "../../../img/img-right.png";

const index = () => {
  const { state, dispatch } = useContext(Context);

  const [currentDate, setCurrentDate] = useState<any>("");
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    showCurrentDate();
  }, []);

  function showCurrentDate() {
    //cria a data inicial
    const date = new Date();

    //define o mês atual
    setCurrentMonth(date.getMonth() + 1);

    //define o ano atual
    setCurrentYear(date.getFullYear());

    dispatch({
      type: "CHANGE_MANUAL_DATE",
      payload: {
        selectedManualMonth: currentMonth,
        selectedManualYear: currentYear,
      },
    });
  }

  function convertMonthAndYearToName() {}

  function changeManualDate(e: any) {
    let newMonth = state.others.selectedManualMonth;
    let newYear = state.others.selectedManualYear;

    if (e.target.alt === "left") {
      newMonth--;
      // Se o mês for menor que 1, retrocede um ano e define o mês para dezembro
      if (newMonth < 1) {
        newMonth = 12;
        newYear--;
      }
    } else {
      // Incrementa o mês
      newMonth++;

      // Se o mês for maior que 12, avança um ano e define o mês para janeiro
      if (newMonth > 12) {
        newMonth = 1;
        newYear++;
      }
    }

    dispatch({
      type: "CHANGE_MANUAL_DATE",
      payload: {
        selectedManualMonth: newMonth,
        selectedManualYear: newYear,
      },
    });
  }

  function teste() {
    showCurrentDate();
    console.log(state.others);
    console.log(state.data)
  }

  return (
    <G.Container width="100%">
      <C.ContainerCurrentDate>
        <G.Container>
          <C.ImgArrow
            src={imgLeft}
            alt="left"
            onClick={changeManualDate}
          ></C.ImgArrow>
        </G.Container>
        <G.Text>{`${state.others.selectedManualMonth} / ${state.others.selectedManualYear}`}</G.Text>
        <G.Container>
          <C.ImgArrow
            src={imgRight}
            alt="right"
            onClick={changeManualDate}
          ></C.ImgArrow>
        </G.Container>
        <button type="button" onClick={teste}>
          teste
        </button>
      </C.ContainerCurrentDate>
    </G.Container>
  );
};

export default index;
