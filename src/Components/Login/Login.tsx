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
import {
  choseImgUser,
  changeSetName,
  changeSetAge,
  changeSetProfession,
  validateInputName,
  validateInputProfession,
  setGender,
  validateInputAge,
  addAllErrorsToAlert,
} from "../../Helpers/Helpers";

const Login = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [profession, setProfession] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [imgUserSelected, setImgUserSelected] = useState<string>("");
  const [imageStates, setImageStates] = useState({
    user1: false,
    user2: false,
    user3: false,
    user4: false,
    user5: false,
    user6: false,
  });
  const [spanName, setSpanName] = useState<string>("");
  const [spanProfession, setSpanProfession] = useState("");
  const [spanAge, setSpanAge] = useState("");
  const [nameValid, setNameValid] = useState<boolean>(false);
  const [professionValid, setProfessionValid] = useState<boolean>(false);
  const [ageValid, setAgeValid] = useState<boolean>(false);
  const [sexValid, setSexValid] = useState<boolean>(false);
  const [avatarValid, setAvatarValid] = useState<boolean>(false);

  const navigate = useNavigate();

  function logIn() {
    validateInputName(name, setSpanName, setNameValid);
    validateInputAge(age, setAgeValid, setSpanAge);
    validateInputProfession(profession, setSpanProfession, setProfessionValid);

    if (nameValid && ageValid && professionValid && sexValid && avatarValid) {
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
    } else {
      addAllErrorsToAlert(
        nameValid,
        ageValid,
        professionValid,
        sexValid,
        avatarValid
      );
    }
  }

  function handleImgUserClick(e: any, img: string) {
    choseImgUser(
      e,
      setImgUserSelected,
      imageStates,
      img,
      setImageStates,
      setAvatarValid
    );
  }

  type UserImagesProps = {
    user1: string;
    user2: string;
    user3: string;
    user4: string;
    user5: string;
    user6: string;
  };

  const users: string[] = [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
  ];

  const userImages: UserImagesProps = {
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
  };

  function teste() {
    console.log(imageStates);
    console.log(imgUserSelected);
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
            onBlur={() => validateInputAge(age, setAgeValid, setSpanAge)}
            name="number"
          ></C.InputNumber>
          <C.Span>
            <C.Text fontSize="0.8rem">{spanAge}</C.Text>
          </C.Span>
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
          <C.Container
            displayFlex
            alignItems="center"
            justifyContent="center"
            width="100%"
            padding="0 5px"
          >
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

        <C.ContainerAvatars>
          {users.map((item) => (
            <C.ImgUser
              key={item}
              src={userImages[item as keyof UserImagesProps]}
              onClick={(e) => handleImgUserClick(e, item)}
              style={{ border: imageStates[item] ? "1px solid black" : "" }}
            />
          ))}
        </C.ContainerAvatars>

        <C.ButtonSend onClick={logIn} type="button">
          Entrar
        </C.ButtonSend>

        <button onClick={teste} type="button">
          teste
        </button>
      </C.ContainerModal>
    </C.MainContainerModal>
  );
};

export default Login;
