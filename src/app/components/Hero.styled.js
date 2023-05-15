import styled from "styled-components";
import bg from "../assets/div/Video-background.svg";
export const Wrapper = styled.div`
  background: url(${bg});
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  width: 80%;
  color: white;
`;
