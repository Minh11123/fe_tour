import React from "react";
import { FooterStyle, LogoFooter } from "./index.style";
import FooterLogo from "../../../img/logo_2.png";

const Footer = () => {
  return (
    <div>
      <FooterStyle>
        <div className="footerLeft">
          <LogoFooter src={FooterLogo} />
          <p>WORLD TRAVEL</p>
        </div>
        <div className="footerContent">
          <ul>
            <li>Về chúng tôi</li>
            <li>Chính sách</li>
            <li>Điều khoản</li>
          </ul>
          <ul>
            <li>Tin tức</li>
            <li>Liên hệ</li>
            <li>Thành viên</li>
          </ul>
        </div>
        <div className="footerRight"></div>
      </FooterStyle>
    </div>
  );
};

export default Footer;
