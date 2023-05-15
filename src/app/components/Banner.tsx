import Image from "next/image";
import arrow from "../assets/arrow.svg";
import { BannerContainer, Title } from "./Banner.styled";
const Banner = () => {
  return (
    <BannerContainer>
      {/* <h1 className="text-5x1 text-red-500"></h1> */}
      <Title>**Earn up to $200 for getting started</Title>
      <Image src={arrow} alt="arrow" />
    </BannerContainer>
  );
};

export default Banner;
