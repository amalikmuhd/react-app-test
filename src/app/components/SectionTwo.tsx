import {
  Container,
  SectionTwoContainer,
  TitleSectionTwo,
} from "./SectionTwo.styled";
import phones from "../assets/phones.svg";
import Image from "next/image";
const SectionTwo = () => {
  return (
    <SectionTwoContainer>
      <Container>
        <Image src={phones} alt="phones" style={{ position: "absolute" }} />
        <TitleSectionTwo>See How</TitleSectionTwo>
      </Container>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
