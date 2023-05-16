import styled from "styled-components";

export const SectionTwoContainer = styled.div`
  height: 40vh;
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 80;
  position: relative;
`;

export const TitleSectionTwo = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 309px;
  line-height: 324px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -6.48px;

  background: linear-gradient(180deg, #e4e8f2 0%, #f7f9fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: absolute;
  margin-top: 240px;
  z-index: -5;
`;

export const TitleSectionThree = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 309px;
  line-height: 324px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -6.48px;

  background: linear-gradient(180deg, #e4e8f2 0%, #f7f9fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: absolute;
  margin-top: 640px;
  z-index: -5;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  display: flex;
  justify-content: center;
`;
