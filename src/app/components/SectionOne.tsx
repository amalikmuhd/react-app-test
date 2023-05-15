import {
  Description,
  EarnContainer,
  EarnContainerTitle,
  GetStarted,
  SectionOneContainer,
  SubTitle,
  Title,
} from "./SectionOne.styled";
import arrow from "../assets/arrow.svg";
import logo2 from "../assets/logo2.svg";
import TextLoop from "react-text-loop";

import Image from "next/image";
const SectionOne = () => {
  return (
    <SectionOneContainer>
      <Title>Business banking with</Title>
      <SubTitle>No credit check</SubTitle>
      <Description>
        Thousands of entrepreneurs bank on Winden to start or grow their
        business. Open an account in under 3 minutes.
      </Description>
      <GetStarted>
        <button>Get Started</button>
        <Image src={arrow} alt="arrow right" />
      </GetStarted>

      <EarnContainer>
        <Image src={logo2} alt="logo two" />

        <EarnContainerTitle>
          Sign up today and earn up to $200. Conditions apply. **
        </EarnContainerTitle>
      </EarnContainer>
    </SectionOneContainer>
  );
};

export default SectionOne;
