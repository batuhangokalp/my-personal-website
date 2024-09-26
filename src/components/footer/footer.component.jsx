import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FooterDiv } from "./footer.styles";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        © {new Date().getFullYear() + " "}Batuhan Gokalp
        <br />
        <a href="mailto:bbatuhangokalp@gmail.com" className="mail-icon" target="_blank" rel="noopener noreferrer">
          bbatuhangokalp@gmail.com <AiOutlineMail /> &nbsp;
        </a>
      </FooterDiv>
    </>
  );
};

export default Footer;
