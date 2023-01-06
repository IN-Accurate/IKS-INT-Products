import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container" id="footer-container">
      <h2>Contact Us</h2>
      <p className="footer-text">Tel: +91 1234567890</p>
      <a className="footer-text" href="mailto:ieeeks@gmail.com">
        Email: ieeeks@gmail.com
      </a>
      <div className="row">
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email here"
        />
        <span className="input-addon">Subscribe</span>
      </div>
    </div>
  );
}

export default Footer;
