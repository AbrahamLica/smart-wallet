// import user from "../../img/user-default.png";
import wallet from "../../img/wallet.png";
import { Context } from "../../Context/Context";
import { useContext, useState } from "react";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin2.png";
import * as C from "./HeaderStyles";

const Header = () => {
  const { state, dispatch } = useContext(Context);

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
        <C.Text bold fontSize="2.5rem" color="white" margin="0px 10px">
          Smart Wallet
        </C.Text>
        <img src={wallet} alt="carteira" width={60} />
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
