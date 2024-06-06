import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_iocn from "../../assets/twitter_icon.png";
import instagram_iocn from "../../assets/instagram_icon.png";
import facebook_iocn from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_iocn} alt="" />
        <img src={instagram_iocn} alt="" />
        <img src={twitter_iocn} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Investor Relations</li>
        <li>Contact Us</li>
      </ul>
      <div className="footer-text">
        <p className="copyright-text">© 2024 H Esh AN</p>
        {/* <p className="copyright-text">© 2024 H Esh AN</p> */}
      </div>
    </div>
  );
};

export default Footer;
