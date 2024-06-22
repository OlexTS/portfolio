import { FooterBox, Text } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterBox>
      <p>
        {new Date().getFullYear()} {'Copyright © developed by '}{''}<Text>Olexandr Tsapuk </Text>
        <img src="." alt="" />
      </p>
    </FooterBox>
  );
};

export default Footer;
