import { InnerContainer, Wrapper } from "./Hero.styled";
import Nav from "./Nav";
import SectionOne from "./SectionOne";
import Banner from "./Banner";

const HeroComponent = () => {
  return (
    <>
      <Banner />
      <Nav />
      <Wrapper>
        <InnerContainer>
          <SectionOne />
        </InnerContainer>
      </Wrapper>
    </>
  );
};

export default HeroComponent;
