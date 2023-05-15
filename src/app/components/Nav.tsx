import {
  MiddleContainer,
  NavContainer,
  RightContainer,
  LogoContainer,
  Item,
  SignUpButtonStyle,
  InnerContainer,
} from "./Nav.styled";
import Logo from "../assets/logothree.svg";
import text from "../assets/logo.svg";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <NavContainer>
        <InnerContainer>
          <LogoContainer>
            <Image src={Logo} alt="logo" />
            <Image src={text} alt="logo" />
          </LogoContainer>

          <MiddleContainer>
            <Item>Use Cases</Item>
            <Item>Products</Item>
            <Item>Company</Item>
            <Item>Support</Item>
          </MiddleContainer>

          <RightContainer>
            <button>Log in</button>
            <SignUpButtonStyle>Sign up</SignUpButtonStyle>
          </RightContainer>
        </InnerContainer>
      </NavContainer>
    </>
  );
};

export default Nav;
