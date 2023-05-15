import {
  MiddleContainer,
  NavContainer,
  RightContainer,
  LogoContainer,
  Item,
  SignUpButtonStyle,
} from "./Nav.styled";
import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <img src={Logo} alt="logo" />
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
