import {InnerContainer, Wrapper} from "./Hero.styled";
import Nav from "./Nav";
import SectionOne from "./SectionOne";
import Banner from "./Banner";
import SectionTwo from "./SectionTwo";
import Footer from "./Footer";

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
      <SectionTwo />
      <Footer />
    </>
  );
};

export default HeroComponent;
