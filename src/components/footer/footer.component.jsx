import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FooterDiv } from "./footer.styles";
import { HiOutlineKey } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        © {new Date().getFullYear() + " "}Batuhan Gokalp
        <br />
        <a
          href="mailto:bbatuhangokalp@gmail.com"
          className="mail-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>
      </FooterDiv>
    </>
  );
};

export default Footer;
