import React from "react";

// media start
import { ReactComponent as FooterImg } from "../../assets/svg/footerImg.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svg/phoneIcon.svg";
import { ReactComponent as LogoEmail } from "../../assets/svg/navEmailIcon.svg";
// media end

// style start
import "./style/Footer.css";
import "./style/AdaptiveFooter.css";
// style end

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer_left_block">
        <p>
          Приглашаем
          <br />
          <b>к сотрудничеству</b>
        </p>
        <a href="#">
          <PhoneIcon />
          +996 995 00 12 48 (Whatsapp)
        </a>
        <a href="#">
          <LogoEmail />
          sales@coolbrs.com
        </a>
        <div className="footer_links">
          <button>Facebook</button>
          <button>Instagram</button>
          <button>Youtube</button>
        </div>
      </div>
      <div className="footer_right_block">
        <FooterImg />
      </div>
    </footer>
  );
};

export default Footer;
