import Image from "next/image";
import techCrunch from "../assets/TechCrunch.svg";
import forbes from "../assets/Forbes.svg";
import entreprenuer from "../assets/Entrepreneur.svg";
import techTimes from "../assets/TechCrunch.png";
import wallStreets from "../assets/TheWallStreet.svg";
import {FooterContainer, FooterInnerContainer} from "../styles/Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <Image src={techCrunch} alt="phones" style={{width: "150px"}} />
        <Image src={forbes} alt="phones" style={{width: "150px"}} />
        <Image src={entreprenuer} alt="phones" style={{width: "150px"}} />
        <Image src={techTimes} alt="phones" style={{width: "150px"}} />
        <Image src={wallStreets} alt="phones" style={{width: "150px"}} />
      </FooterInnerContainer>
    </FooterContainer>
  );
};

export default Footer;
