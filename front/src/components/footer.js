import "../assets/output.css";
import logo from "../assets/logo.svg";
import { InputWithIcon } from "./input";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div>
        <InputWithIcon />
      </div>
      <div></div>
    </div>
  );
};
