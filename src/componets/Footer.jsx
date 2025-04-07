import "./footer.css";
import { IoIosSend } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";
import logo from "../assets/images/logo2_footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <p className="contact-icon">
          <IoCall />
        </p>
        <h3>CONTACT INFO</h3>
        <p className="number">913-473-7000</p>
        <p className="email">contact@barbershop.com</p>
      </div>

      <div className="footer-logo">
        <div className="footer-details">
          <div className="footer-middle">
            <img src={logo} alt="FOOTER LOGO" />
            <p>
              There are many variations of passages of <br /> Lorem Ipsum
              available be the majority.
            </p>

            <div className="social-media-icon">
              <div className="social-link">
                <a
                  href="https://www.facebook.com"
                  className="facebook-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </div>
              <div className="social-link">
                <a
                  href="https://www.instagram.com"
                  className="instagram-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="social-link">
                <a
                  href="https://www.linkedin.com"
                  className="linkedin-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <p className="contact-icon">
          <IoIosSend />
        </p>
        <h3>CONTACT INFO</h3>
        <p>913-473-7000</p>
        <p>contact@barbershop.com</p>
      </div>
      <div className="copyright">
        <p>
          Copyright ©2025 All rights reserved | This template is made with
          <span>
            <FaHeart className="heart" />
          </span>
          by
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Colorlib
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
