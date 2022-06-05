import "../assets/output.css";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import mail from "../assets/mail.svg";
import { InputWithIcon } from "./input";
import { SendButtons } from "./button";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="logo"></img>
        <div className="input-container">
        <h2> Шинэ мэдээ </h2>
        <div className="footer-inputbutton">
          <InputWithIcon />
          <SendButtons />
        </div>
      </div>


      </div>
      
      <div className="footer-fim-logo">
        <img src={ facebook } alt="logo"></img>
        <img src={ instagram } alt="logo"></img>
        <img src={ mail } alt="logo"></img>
      </div>
    </div>
  );
};
