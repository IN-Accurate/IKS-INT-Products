import { useState } from "react";
import "./Footer.css";
import qs from "qs";
import { api } from "../../api";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const subscribe = async () => {
    try {
      const response = await api.post("/subscribe", qs.stringify({ email }));
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
      <h2>CONTACT US</h2>
      <div className="footer-text-container">
      <p className="footer-text">Tel: 987654321</p> /
      <a className="footer-text" href="mailto:ieeeks@gmail.com">
        Email: ieeeks@gmail.com
      </a></div>
      <div className="row">
        <a href="https://facebook.com/IEEEKerala/" target="_blank"  >
        Facebook</a>
        <a href="https://twitter.com/IEEEKerala" target="_blank"  rel="noreferrer">Twitter</a>
        <a href="https://www.instagram.com/ieeekerala/" target="_blank"  rel="noreferrer">Instagram</a>
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
