import { useState } from "react";
import "./Footer.css";
import qs from "qs";
import { api } from "../../api";

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

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
      <hr style={{ width: "100vw", color: "white" }} />
      <h2>CONTACT US</h2>
      <p style={{ color: "white", fontSize: "16px", marginBottom: "30px" }}>
        We would love to hear from you!
      </p>
      <div className="contact-container">
        <div className="contact">
          <FaPhoneAlt />
          <p>Call us at</p>
          <p>+91 1234567890</p>
        </div>
        <div className="contact">
          <FaMapMarkerAlt />
          <p> IEEE Section Office</p>
          <p>Kochi, 683503</p>
        </div>
        <div className="contact">
          <FaEnvelope />
          <p>Email Us at</p>
          <p>ieeeks@gmail.com</p>
        </div>
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
