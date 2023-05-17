import Image from "next/image";
import Arrow from "../assets/arrow.svg";
import {BannerContainer, Title} from "../styles/Banner.styled";
const Banner = () => {
  return (
    <BannerContainer>
      <Title>**Earn up to $200 for getting started</Title>
      <Image
        src={Arrow}
        alt="Arrow icon"
        style={{width: "32px", height: "32px"}}
      />
    </BannerContainer>
  );
};

export default Banner;
