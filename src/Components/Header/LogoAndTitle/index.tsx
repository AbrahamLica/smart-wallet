import * as C from "./styles";
import * as G from "../../../Helpers/GeneralStyles";
import wallet from "../../../img/wallet.png";

const index = () => {
  return (
    <G.Container displayFlex alignItems="center">
      <C.Title>Smart Wallet</C.Title>
      <C.imgWallet src={wallet}></C.imgWallet>
    </G.Container>
  );
};

export default index;
