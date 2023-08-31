import React from "react";
import user from "../../img/user-default.png";
import wallet from "../../img/wallet.png";
import * as C from "./HeaderStyles";

const Header = () => {
  return (
    <C.ContainerHeader>
      <C.ContainerInformationsUser>
        <img src={user} alt="Usuario" width={50} />
        <C.Text color="white" bold>
          Fulano
        </C.Text>
      </C.ContainerInformationsUser>

      <C.ContainerLogoTitle>
        <C.Text bold fontSize="2.5rem" color="white" margin="0px 10px">
          Smart Wallet
        </C.Text>
        <img src={wallet} alt="carteira" width={60} />
      </C.ContainerLogoTitle>

      <C.ContainerNav>
        <C.Text cursorPointer color="white">
          Quem somos
        </C.Text>
        <C.Text cursorPointer margin="0px 25px" color="white">
          Contato
        </C.Text>
      </C.ContainerNav>
    </C.ContainerHeader>
  );
};

export default Header;
