import { useEffect, useState } from "react";
import * as C from "./styles";
import * as G from "../../../Helpers/GeneralStyles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import imgLeft from "../../../img/img-left.png";
import imgRight from "../../../img/img-right.png";
import { showCurrentDate } from "../../../Helpers/Helpers";
import { changeManualDate } from "../../../Helpers/Helpers";

const index = () => {
  const { state, dispatch } = useContext(Context);
  const [currentDate, setCurrentDate] = useState<any>("");
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    showCurrentDate(
      setCurrentMonth,
      setCurrentYear,
      currentMonth,
      currentYear,
      dispatch
    );
  }, [currentMonth, currentYear]);

  return (
    <G.Container width="100%" displayFlex justifyContent="center">
      <C.ContainerCurrentDate>
        <G.Container>
          <C.ImgArrow
            src={imgLeft}
            alt="left"
            onClick={(e) => changeManualDate(e, state, dispatch)}
          ></C.ImgArrow>
        </G.Container>

        <G.Text>
          {state.others.selectedManualMonth < 10
            ? `0${state.others.selectedManualMonth}`
            : state.others.selectedManualMonth}
          /{state.others.selectedManualYear}
        </G.Text>

        <G.Container>
          <C.ImgArrow
            src={imgRight}
            alt="right"
            onClick={(e) => changeManualDate(e, state, dispatch)}
          ></C.ImgArrow>
        </G.Container>
      </C.ContainerCurrentDate>
    </G.Container>
  );
};

export default index;
