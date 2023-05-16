import {InnerContainer, Wrapper} from "../styles/Hero.styled";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Layout from "./Layout";
import {Fragment} from "react";

const HeroComponent = () => {
  return (
    <Layout>
      <Fragment>
        <Wrapper>
          <InnerContainer>
            <SectionOne />
          </InnerContainer>
        </Wrapper>
        <SectionTwo />
      </Fragment>
    </Layout>
  );
};

export default HeroComponent;
