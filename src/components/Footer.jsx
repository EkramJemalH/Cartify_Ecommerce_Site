import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
function Footer(){
    return(
        <div>
            <footer className="footer-container">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={30} className="icon-fb" />
        </a>
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noreferrer">
          <FaWhatsapp size={30} className="icon-wa" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={30} className="icon-ig" />
        </a>
      </div>
      <p style={{ color: 'white', marginTop: '10px' }}>
        Copyright © 2023 Cartify. All rights reserved.
      </p>
    </footer>
        </div>
    );
}
export default Footer;
