import {
  Description,
  EarnContainer,
  EarnContainerTitle,
  GetStarted,
  SectionOneContainer,
  SubTitle,
  SubTitleContainer,
  Title,
  WrapperSubTitle,
} from "./SectionOne.styled";
import arrow from "../assets/arrow.svg";
import logo2 from "../assets/logo2.svg";
import dashboard from "../assets/dashboard.svg";
import phones from "../assets/phones.svg";
import card from "../assets/card.svg";
import Image from "next/image";
const SectionOne = () => {
  return (
    <SectionOneContainer>
      <Title>Business banking with</Title>
      <SubTitleContainer>
        <WrapperSubTitle>
          <SubTitle>Zero Fees</SubTitle>
          <SubTitle>Fire Wires</SubTitle>
          <SubTitle>Unlimited Rewards</SubTitle>
          <SubTitle>No credit check</SubTitle>
        </WrapperSubTitle>
      </SubTitleContainer>

      <Description>
        Thousands of entrepreneurs bank on Winden to start or grow their
        business. Open an account in under 3 minutes. Zero Fees Fire Wires
        Unlimited Rewards
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
      <div style={{ width: "100%", position: "relative", marginTop: "100px" }}>
        <Image
          src={card}
          alt="dashboard"
          style={{
            position: "absolute",
            right: "2%",
            top: "-25%",
            zIndex: -3,
          }}
        />
        <Image
          src={dashboard}
          alt="dashboard"
          style={{ width: "100%", zIndex: 4 }}
        />
      </div>
    </SectionOneContainer>
  );
};

export default SectionOne;
