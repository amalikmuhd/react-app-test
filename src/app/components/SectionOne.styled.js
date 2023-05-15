import styled from "styled-components";

export const SectionOneContainer = styled.div`
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 59px;
  line-height: 80px;
  display: flex;
  align-items: center;
  letter-spacing: -1.28px;

  background: linear-gradient(
    98deg,
    rgba(255, 255, 255, 0.88) 0%,
    rgba(255, 255, 255, 0.56) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const SubTitleContainer = styled.div`
  height: 100px;
  overflow: hidden;
  margin: 20px 0;
`;
export const SubTitle = styled.h2`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 95px;
  line-height: 104px;
  display: flex;
  align-items: center;
  letter-spacing: -1.92px;

  background: linear-gradient(95deg, #9ee8fa 0%, rgba(255, 255, 255, 0) 16%),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(135deg, #a088ff 0%, #a088ff 14%, #37d7ff 81%, #37d7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const WrapperSubTitle = styled.div`
  height: 100%;
  animation: move 8s ease-in-out infinite 4s;
  animation-delay: 4s;
  transition: all 2s ease-in-out;

  @keyframes move {
    25% {
      transform: translateY(-100px);
    }
    50% {
      transform: translateY(-200px);
    }
    75% {
      transform: translateY(-320px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const Description = styled.p`
  /* font-family: "SF Pro Text"; */
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  display: flex;
  align-items: center;
  letter-spacing: -0.36px;

  background: linear-gradient(
    90deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.7) 30%,
    #ffffff 69%,
    rgba(255, 255, 255, 0.6) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  /* text-fill-color: transparent; */
`;

export const GetStarted = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 24px;
  width: 192px;
  height: 56px;
  background: #6936f5;
  &:hover {
    background: #7546f6;
  }
`;

export const EarnContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  margin-bottom: 50px;
`;
export const EarnContainerTitle = styled.div`
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: -0.28px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.7) 0%,
    #ffffff 61%,
    rgba(255, 255, 255, 0.8) 93%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
