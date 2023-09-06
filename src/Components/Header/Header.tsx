// import user from "../../img/user-default.png";
import wallet from "../../img/wallet.png";
import { Context } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin2.png";
import menu from "../../img/menu.svg";
import * as C from "./HeaderStyles";
import close from "../../img/close.svg";

const Header = () => {
  const { state, dispatch } = useContext(Context);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [balanco, setBalanco] = useState<any>(0);
  const [despesa, setDespesa] = useState<any>(0);
  const [receita, setReceita] = useState<any>(0);

  useEffect(() => {
    calcularTudo();
  }, [state.data, dispatch]);

  const list = [
    { id: 1, name: "Despesa" },
    { id: 2, name: "Extra" },
    { id: 3, name: "Salário" },
  ];

  const formatMoney = (value: any) => {
    if (typeof value !== "string") {
      return "0,00"; // ou algum valor padrão apropriado
    }

    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = (parseFloat(numericValue) / 100).toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
      }
    );

    return formattedValue;
  };

  function calcularTudo() {
    var totalDespesaFormatado = 0;
    var totalReceitaFormatado = 0;
    var totalBalanco = 0;

    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].despesa) {
        totalDespesaFormatado += parseFloat(
          state.data[i].despesa.slice(2).replace(".", "").replace(",", ".")
        );
      }
    }
    setDespesa(formatMoney(totalDespesaFormatado.toFixed(2)));

    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].receita) {
        totalReceitaFormatado += parseFloat(
          state.data[i].receita.slice(2).replace(".", "").replace(",", ".")
        );
      }
    }
    setReceita(formatMoney(totalReceitaFormatado.toFixed(2)));
    totalBalanco = totalReceitaFormatado - totalDespesaFormatado;

    if (totalBalanco < 0) {
      setBalanco("-" + formatMoney(Math.abs(totalBalanco).toFixed(2)));
    } else {
      setBalanco(formatMoney(totalBalanco.toFixed(2)));
    }
  }

  return (
    <C.ContainerHeader>
      <C.ContainerInformationsUser>
        {state.user.name ? (
          <>
            <img src={state.user.img} alt="Usuario" width={50} />
            <C.Container margin="0 10px">
              <C.Text color="white">{state.user.name}</C.Text>
              <C.Text color="white">{state.user.age} anos</C.Text>
              <C.Text color="white">{state.user.profession}</C.Text>
            </C.Container>
          </>
        ) : null}
      </C.ContainerInformationsUser>

      <C.ContainerLogoTitle>
        <C.Container displayFlex alignItems="center">
          <C.Title>Smart Wallet</C.Title>
          <C.imgWallet src={wallet}></C.imgWallet>
        </C.Container>

        <C.imgMenuHamburguer
          src={menu}
          onClick={() => setMenuIsOpen(menuIsOpen ? false : true)}
        ></C.imgMenuHamburguer>

        <C.ContainerMenuHamburguer
          style={{ display: menuIsOpen ? "flex" : "none" }}
        >
          <C.Container displayFlex justifyContent="flex-end" margin="10px">
            <C.IconClose
              src={close}
              onClick={() => setMenuIsOpen(false)}
            ></C.IconClose>
          </C.Container>

          <C.Container
            displayFlex
            column
            alignItems="center"
            justifyContent="center"
          >
            <img src={state.user.img} alt="Usuario" width={150} />
            <C.Container margin="0 10px">
              <C.Text color="white" fontSize="1.7rem" textAlign="center">{state.user.name}</C.Text>
              <C.Text color="white" fontSize="1.7rem" textAlign="center">{state.user.age} anos</C.Text>
              <C.Text color="white" fontSize="1.7rem" textAlign="center">{state.user.profession}</C.Text>
            </C.Container>
          </C.Container>

          <C.ContainerCategory>
          <C.ContainerSingleInformation>
            <C.TitleInformation>Receita</C.TitleInformation>
            <C.Information>{receita}</C.Information>
          </C.ContainerSingleInformation>

          <C.ContainerSingleInformation>
            <C.TitleInformation>Despesa</C.TitleInformation>
            <C.Information>{despesa}</C.Information>
          </C.ContainerSingleInformation>

          <C.ContainerSingleInformation>
            <C.TitleInformation>Balanço</C.TitleInformation>
            <C.Information>{balanco}</C.Information>
          </C.ContainerSingleInformation>
        </C.ContainerCategory>


        </C.ContainerMenuHamburguer>
      </C.ContainerLogoTitle>

      <C.ContainerNav>
        <a href="https://github.com/AbrahamLica" target="_blank">
          <img src={github} alt="github" width={60} />
        </a>
        <a
          href="https://www.linkedin.com/in/abraham-melquisedeque-pereira-lic%C3%A1-0a1736203/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" width={52} />
        </a>
      </C.ContainerNav>
    </C.ContainerHeader>
  );
};

export default Header;
