import React, { ChangeEvent, useContext, useState } from "react";
import { Context } from "../../Context/Context";
import user1 from "../../img/user1.png";
import user2 from "../../img/user2.png";
import user3 from "../../img/user3.png";
import user4 from "../../img/user4.png";
import user5 from "../../img/user5.png";
import user6 from "../../img/user6.png";
import { useNavigate } from "react-router-dom";
import * as C from "./LoginStyles";
import { choseImgUser } from "../../Helpers/Helpers";
import { changeSetName } from "../../Helpers/Helpers";
import { changeSetAge } from "../../Helpers/Helpers";
import { changeSetProfession } from "../../Helpers/Helpers";
import { validateInputName } from "../../Helpers/Helpers";
import { validateInputProfession } from "../../Helpers/Helpers";
import { setGender } from "../../Helpers/Helpers";

const Login = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [profession, setProfession] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [imgUserSelected, setImgUserSelected] = useState<string>("");
  const [imgUser1, setImgUser1] = useState(false);
  const [imgUser2, setImgUser2] = useState(false);
  const [imgUser3, setImgUser3] = useState(false);
  const [imgUser4, setImgUser4] = useState(false);
  const [imgUser5, setImgUser5] = useState(false);
  const [imgUser6, setImgUser6] = useState(false);
  const [spanName, setSpanName] = useState<string>("");
  const [spanProfession, setSpanProfession] = useState("");
  const [nameValid, setNameValid] = useState<boolean>(false);
  const [professionValid, setProfessionValid] = useState<boolean>(false);
  const [ageValid, setAgeValid] = useState<boolean>(false);
  const [sexValid, setSexValid] = useState<boolean>(false);
  const [imgValid, setImgValid] = useState<boolean>(false);

  const navigate = useNavigate();

  function logIn() {
    if (age && age > 10 && age < 99) {
      setAgeValid(true);
    }

    if (sex) {
      setSexValid(true);
    }

    if (imgUserSelected) {
      setImgValid(true);
    }

    validateInputName(name, setSpanName, setNameValid);
    validateInputProfession(profession, setSpanProfession, setProfessionValid);

    if (nameValid && ageValid && professionValid && sexValid && imgValid) {
      dispatch({
        type: "LOG_IN",
        payload: {
          name: name,
          age: age,
          profession: profession,
          sex: sex,
          img: imgUserSelected,
        },
      });
      navigate("/Home");
    } else if (!nameValid) {
      alert("Verifique o campo 'Nome'.");
    } else if (!ageValid) {
      alert("Verifique o campo 'Idade'.");
    } else if (!professionValid) {
      alert("Verifique o campo 'Profissão'.");
    } else if (!sexValid) {
      alert("Verifique se o seu Gênero está marcado.");
    } else if (!imgValid) {
      alert("Por favor, Escolha um avatar.");
    }
  }

  return (
    <C.MainContainerModal>
      <C.ContainerModal>
        <C.Text fontSize="1.6rem">Login</C.Text>
        <C.ContainerLabelInput>
          <C.InputText
            type="text"
            placeholder="Nome"
            onChange={(e) => changeSetName(e, setName)}
            onBlur={() => validateInputName(name, setSpanName, setNameValid)}
            name="name"
          ></C.InputText>
          <C.Span>
            <C.Text fontSize="0.8rem">{spanName}</C.Text>
          </C.Span>
        </C.ContainerLabelInput>

        <C.ContainerLabelInput>
          <C.InputNumber
            type="number"
            placeholder="Idade"
            min={10}
            onChange={(e) => changeSetAge(e, setAge, setAgeValid)}
            name="number"
          ></C.InputNumber>
        </C.ContainerLabelInput>

        <C.ContainerLabelInput>
          <C.InputText
            type="text"
            placeholder="Profissão"
            onChange={(e) => changeSetProfession(e, setProfession)}
            onBlur={() =>
              validateInputProfession(
                profession,
                setSpanProfession,
                setProfessionValid
              )
            }
            name="profession"
          ></C.InputText>
          <C.Span>
            <C.Text fontSize="0.8rem">{spanProfession}</C.Text>
          </C.Span>
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
              onChange={(e) => setGender(e, setSex, setSexValid)}
              checked={sex == "male"}
            ></C.InputRadio>
            <C.Label htmlFor="feminino" margin="0 10px 0 10px">
              Feminino
            </C.Label>
            <C.InputRadio
              type="radio"
              name="sex"
              id="feminino"
              value="female"
              onChange={(e) => setGender(e, setSex, setSexValid)}
              checked={sex == "female"}
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
              onClick={(e) =>
                choseImgUser(
                  e,
                  setImgUserSelected,
                  setImgUser1,
                  setImgUser2,
                  setImgUser3,
                  setImgUser4,
                  setImgUser5,
                  setImgUser6,
                  setImgValid
                )
              }
              style={{ border: imgUser2 ? "1px solid black" : "" }}
            />
            <C.ImgUser
              src={user3}
              alt="user3"
              onClick={(e) =>
                choseImgUser(
                  e,
                  setImgUserSelected,
                  setImgUser1,
                  setImgUser2,
                  setImgUser3,
                  setImgUser4,
                  setImgUser5,
                  setImgUser6,
                  setImgValid
                )
              }
              style={{ border: imgUser3 ? "1px solid black" : "" }}
            />
            <C.ImgUser
              src={user4}
              alt="user4"
              onClick={(e) =>
                choseImgUser(
                  e,
                  setImgUserSelected,
                  setImgUser1,
                  setImgUser2,
                  setImgUser3,
                  setImgUser4,
                  setImgUser5,
                  setImgUser6,
                  setImgValid
                )
              }
              style={{ border: imgUser4 ? "1px solid black" : "" }}
            />
          </C.Container>

          <C.Container displayFlex width="100%" justifyContent="space-between">
            <C.ImgUser
              src={user1}
              alt="user1"
              onClick={(e) =>
                choseImgUser(
                  e,
                  setImgUserSelected,
                  setImgUser1,
                  setImgUser2,
                  setImgUser3,
                  setImgUser4,
                  setImgUser5,
                  setImgUser6,
                  setImgValid
                )
              }
              style={{ border: imgUser1 ? "1px solid black" : "" }}
            />
            <C.ImgUser
              src={user5}
              alt="user5"
              onClick={(e) =>
                choseImgUser(
                  e,
                  setImgUserSelected,
                  setImgUser1,
                  setImgUser2,
                  setImgUser3,
                  setImgUser4,
                  setImgUser5,
                  setImgUser6,
                  setImgValid
                )
              }
              style={{ border: imgUser5 ? "1px solid black" : "" }}
            />
            <C.ImgUser
              src={user6}
              alt="user6"
              onClick={(e) =>
                choseImgUser(
                  e,
                  setImgUserSelected,
                  setImgUser1,
                  setImgUser2,
                  setImgUser3,
                  setImgUser4,
                  setImgUser5,
                  setImgUser6,
                  setImgValid
                )
              }
              style={{ border: imgUser6 ? "1px solid black" : "" }}
            />
          </C.Container>
        </C.Container>

        <C.ButtonSend onClick={logIn} type="button">
          Entrar
        </C.ButtonSend>
      </C.ContainerModal>
    </C.MainContainerModal>
  );
};

export default Login;
