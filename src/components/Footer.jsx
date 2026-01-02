import "./Footer.css";

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
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            </p>
          </div>

        </div>

        <hr />

        <p className="footer-copy">
          © 2025 Sri Lanka Mega Projects Blog | Building the Future
        </p>

        <p className="footer-tagline">
          Showcasing Sri Lanka's architectural marvels and urban development
        </p>
      </div>
    </footer>
  );
};

export default Footer;
