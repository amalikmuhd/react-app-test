import {
  MiddleContainer,
  NavContainer,
  RightContainer,
  LogoContainer,
  Item,
  SignUpButtonStyle,
} from "./Nav.styled";
import Logo from "../assets/logo.svg";
import Image from "next/image";

const Nav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Image src={Logo} alt="logo" />
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
    </NavContainer>
  );
};

export default Nav;
