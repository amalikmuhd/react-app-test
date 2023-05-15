import styled from "styled-components";
import bg from "../assets/div/Video-background.svg";
export const Wrapper = styled.div`
  background: url(${bg});
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background: url(hero-background.png),
    linear-gradient(90deg, #060a23 0%, #07041e 25%, #07041e 75%, #060a23 100%);
`;

export const InnerContainer = styled.div`
  width: 60%;
  color: white;
`;
