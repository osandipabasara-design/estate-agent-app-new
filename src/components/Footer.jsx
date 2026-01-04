import "./Footer.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="top-info">

          {/* Contact Info */}
          <div className="info">
            <h3>Contact Us</h3>
            <p>
              Email:{" "}
              <a href="mailto:osandipabasara@gmail.com">
                osandipabasara@gmail.com
              </a>
            </p>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Address: 123 Blue Haven, Ocean City, WC 12345</p>
          </div>

          {/* Social Media */}
          <div className="info">
            <h3>Follow Us</h3>
            <p className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter /> Twitter
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook /> Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram /> Instagram
              </a>
            </p>
          </div>

        </div>

        <hr />

        <p className="footer-copy">
          © 2026 EstateAgent | Find Your Perfect Property
        </p>

        <p className="footer-tagline">
          Showcasing finest homes, properties, and real estate oppotunities
        </p>
      </div>
    </footer>
  );
};

export default Footer;
