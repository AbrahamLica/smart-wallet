import { handleToggleMenu } from "../../../Helpers/Helpers";
import menu from "../../../img/menu.svg";
import InformationsUser from "../InformationsUser";
import MenuHamburguer from "../MenuHamburguer";
import LogoAndTitle from "../LogoAndTitle";
import Nav from "../Nav";
import { Context } from "../../../Context/Context";
import { useContext } from "react";
import * as C from "./styles";

const Header = () => {
  const { state, dispatch } = useContext(Context);

  const list = [
    { id: 1, name: "Despesa" },
    { id: 2, name: "Extra" },
    { id: 3, name: "Salário" },
  ];

  return (
    <C.ContainerHeader>
      <InformationsUser></InformationsUser>

      <C.ContainerLogoTitle>
        <LogoAndTitle></LogoAndTitle>

        <C.imgMenuHamburguer
          src={menu}
          onClick={() => handleToggleMenu(dispatch, state)}
        ></C.imgMenuHamburguer>

        <MenuHamburguer></MenuHamburguer>
      </C.ContainerLogoTitle>

      <Nav></Nav>
    </C.ContainerHeader>
  );
};

export default Header;
