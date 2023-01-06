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
      <hr style={{width:'100vw',color:"white"}}/>
      <h2>CONTACT US</h2>
      <p style={{ color: "white", fontSize: "16px",marginBottom:"30px"}}>
        We would love to hear from you!
      </p>
      <div className="row">
        <div className="icons-row">
          <FaPhoneAlt className="icon" />
          <FaMapMarkerAlt className="icon" />
          <FaEnvelope className="icon" />
        </div>
      </div>
      <div className="contact-details">
        <div>Call Us at</div>
        <div className="location-details-text">940 Piller Ace m2 </div>
        <div>Email Us at</div>
      </div>
      <div className="contact-details-text">
        <div className="phone-text">9876543201</div>
        <div className="location-text">Extded IT 690202</div>
        <div>abc@gmail.com</div>
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
