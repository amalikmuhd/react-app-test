import { InnerContainer, Wrapper } from "./Hero.styled";
import Nav from "./Nav";
import SectionOne from "./SectionOne";

const HeroComponent = () => {
  return (
    <Wrapper>
      <InnerContainer>
        <Nav />
        <SectionOne />
      </InnerContainer>
    </Wrapper>
  );
};

export default HeroComponent;
