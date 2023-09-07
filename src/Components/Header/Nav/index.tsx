import * as C from "./styles";
import github from "../../../img/github.png";
import linkedin from "../../../img/linkedin2.png";

const index = () => {
  return (
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
  );
};

export default index;
