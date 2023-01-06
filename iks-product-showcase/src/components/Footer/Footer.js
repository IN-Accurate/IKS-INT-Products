import { useState } from "react";
import "./Footer.css";
import { api } from "../../api";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const subscribe = async () => {
    try {
      const response = await api.post("/subscribe", { email });
      if (response.status === 200) {
        setSubscribed(true);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="input-addon" onClick={subscribe}>
          Subscribe
        </span>
      </div>
      {subscribed && <p>Subscribed Successfully</p>}
    </div>
  );
}

export default Footer;
