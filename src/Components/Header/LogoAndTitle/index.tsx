import * as C from "./styles";
import wallet from "../../../img/wallet.png"

const index = () => {
  return (
    <C.Container displayFlex alignItems="center">
      <C.Title>Smart Wallet</C.Title>
      <C.imgWallet src={wallet}></C.imgWallet>
    </C.Container>
  );
};

export default index;
