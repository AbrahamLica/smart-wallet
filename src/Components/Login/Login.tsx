import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Context } from "../../Context/Context";
import user1 from "../../img/user1.png";
import user2 from "../../img/user2.png";
import user3 from "../../img/user3.png";
import user4 from "../../img/user4.png";
import user5 from "../../img/user5.png";
import user6 from "../../img/user6.png";
import * as C from "./LoginStyles";

const Login = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<number>();
  const [profession, setProfession] = useState<string>();
  const [sex, setSex] = useState();
  const [imgUserSelected, setImgUserSelected] = useState();
  const [imgUser1, setImgUser1] = useState(false);
  const [imgUser2, setImgUser2] = useState(false);
  const [imgUser3, setImgUser3] = useState(false);
  const [imgUser4, setImgUser4] = useState(false);
  const [imgUser5, setImgUser5] = useState(false);
  const [imgUser6, setImgUser6] = useState(false);

  useEffect(() => {}, [
    imgUser1,
    imgUser2,
    imgUser3,
    imgUser4,
    imgUser5,
    imgUser6,
  ]);

  function choseImgUser(e: any) {
    console.log(e.target);

    if (e.target.alt == "user1") {
      setImgUserSelected(e.target.src);
      setImgUser1(true);
      setImgUser2(false);
      setImgUser3(false);
      setImgUser4(false);
      setImgUser5(false);
      setImgUser6(false);
    } else if (e.target.alt == "user2") {
      setImgUserSelected(e.target.src);
      setImgUser1(false);
      setImgUser2(true);
      setImgUser3(false);
      setImgUser4(false);
      setImgUser5(false);
      setImgUser6(false);
    } else if (e.target.alt == "user3") {
      setImgUserSelected(e.target.src);
      setImgUser1(false);
      setImgUser2(false);
      setImgUser3(true);
      setImgUser4(false);
      setImgUser5(false);
      setImgUser6(false);
    } else if (e.target.alt == "user4") {
      setImgUserSelected(e.target.src);
      setImgUser1(false);
      setImgUser2(false);
      setImgUser3(false);
      setImgUser4(true);
      setImgUser5(false);
      setImgUser6(false);
    } else if (e.target.alt == "user5") {
      setImgUserSelected(e.target.src);
      setImgUser1(false);
      setImgUser2(false);
      setImgUser3(false);
      setImgUser4(false);
      setImgUser5(true);
      setImgUser6(false);
    } else if (e.target.alt == "user6") {
      setImgUserSelected(e.target.src);
      setImgUser1(false);
      setImgUser2(false);
      setImgUser3(false);
      setImgUser4(false);
      setImgUser5(false);
      setImgUser6(true);
    }

    console.log(imgUserSelected);
  }

  function changeSetName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function changeSetAge(e: ChangeEvent<HTMLInputElement>) {
    setAge(e.target.valueAsNumber);
  }

  function changeSetProfession(e: ChangeEvent<HTMLInputElement>) {
    setProfession(e.target.value);
  }

  function setGender(e: any) {
    setSex(e.target.value);
  }

  function logIn() {
    dispatch({
      type: "LOG_IN",
      payload: {
        name: name,
        age: age,
        profession: profession,
        sex: sex,
        img: imgUserSelected
      },
    });

    console.log(state.user);
  }

  return (
    <C.MainContainerModal>
      <C.ContainerModal>
        <C.ContainerLabelInput>
          <C.InputText
            type="text"
            placeholder="Nome"
            onChange={changeSetName}
          ></C.InputText>
        </C.ContainerLabelInput>

        <C.ContainerLabelInput>
          <C.InputNumber
            type="number"
            placeholder="Idade"
            onChange={changeSetAge}
          ></C.InputNumber>
        </C.ContainerLabelInput>

        <C.ContainerLabelInput>
          <C.InputText
            type="text"
            placeholder="Profissão"
            onChange={changeSetProfession}
          ></C.InputText>
        </C.ContainerLabelInput>

        <C.Container
          displayFlex
          column
          justifyContent="flex-start"
          width="90%"
          padding="10px"
        >
          <C.Label>Sexo:</C.Label>
          <C.Container displayFlex alignItems="center">
            <C.Label htmlFor="masculino" margin="0px 10px 0 0">
              Masculino
            </C.Label>
            <C.InputRadio
              type="radio"
              name="sex"
              id="masculino"
              value="male"
              onChange={setGender}
              checked={sex == 'male'}
            ></C.InputRadio>
            <C.Label htmlFor="feminino" margin="0 10px 0 10px">
              Feminino
            </C.Label>
            <C.InputRadio
              type="radio"
              name="sex"
              id="feminino"
              value="female"
              onChange={setGender}
              checked={sex == 'female'}
            ></C.InputRadio>
          </C.Container>
        </C.Container>

        <C.Container
          displayFlex
          column
          width="100%"
          justifyContent="space-between"
        >
          <C.Container
            displayFlex
            width="100%"
            justifyContent="space-between"
            margin="15px 0"
          >
            <C.ImgUser
              src={user2}
              alt="user2"
              onClick={choseImgUser}
              style={{ border: imgUser2 ? "1px solid black" : "" }}
            />
            <C.ImgUser
              src={user3}
              alt="user3"
              onClick={choseImgUser}
              style={{ border: imgUser3 ? "1px solid black" : "" }}
            />
            <C.ImgUser
              src={user4}
              alt="user4"
              onClick={choseImgUser}
              style={{ border: imgUser4 ? "1px solid black" : "" }}
            />
          </C.Container>

          <C.Container displayFlex width="100%" justifyContent="space-between">
            <C.ImgUser
              src={user1}
              alt="user1"
              onClick={choseImgUser}
              style={{ border: imgUser1 ? "1px solid black" : "" }}
            />
            <C.ImgUser
              src={user5}
              alt="user5"
              onClick={choseImgUser}
              style={{ border: imgUser5 ? "1px solid black" : "" }}
            />
            <C.ImgUser
              src={user6}
              alt="user6"
              onClick={choseImgUser}
              style={{ border: imgUser6 ? "1px solid black" : "" }}
            />
          </C.Container>
        </C.Container>

        <C.ButtonSend onClick={logIn}>Entrar</C.ButtonSend>
      </C.ContainerModal>
    </C.MainContainerModal>
  );
};

export default Login;
