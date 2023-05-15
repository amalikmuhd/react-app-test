import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 10px;
`;

export const LogoContainer = styled.div`
  width: 10%;
`;
export const MiddleContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.p`
  /* font-family: "SF Pro Text"; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.42px;
  color: #ffffff;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  width: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SignUpButtonStyle = styled.button`
  margin-left: 10px;
  width: 89.02px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;
