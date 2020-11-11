import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h1>The Glenz @ Glenmarie Sales Gallery</h1>
            <h2>
              27, Jalan Juruanalisis U1/35, Hicom-Glenmarie Industrial Park,
              40150 Shah Alam, Selangor
            </h2>
            <h2>
              <img
                src="./images/call.png"
                height={20}
                width={20}
                style={{ marginRight: 10 }}
                alt="logo"
              />
              +6 011 - 2826 1298
            </h2>
            <h2>
              <img
                src="./images/mail.png"
                height={20}
                width={20}
                style={{ marginRight: 10 }}
                alt="logo"
              />
              theglenzsales@gmail.com
            </h2>
            <p>
              <img
                src="./images/facebook.png"
                height={20}
                width={20}
                style={{ marginRight: 10 }}
                alt="logo"
              />
              <img
                src="./images/insta.png"
                height={20}
                width={20}
                style={{ marginRight: 10 }}
                alt="logo"
              />
            </p>
          </div>
          <div className="footer-link-items">
            <h1>Easy Links</h1>
            <h2>Overview</h2>
            <h2>Unit</h2>
            <h2>Location</h2>
            <h2>Floor Plan</h2>
            <h2>Facilities</h2>
            <h2>Gallery</h2>
            <h2>Developer</h2>
            <h2>Register</h2>
          </div>
          <div className="footer-link-items">
            <h1>Winner of Best Commercial Suites Development</h1>
            <p>
              <img
                src="/images/awards-crop.png"
                alt="logo"
                className="footer-image"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="white-bar"></div>
      <section className="text-media">
        <div className="text-media-wrap">
          <div className="footer-logo">
            <h2>Copyright 2019 The Glenz @ Glenmarie</h2>
          </div>
          <div className="footer-logo">
            <h2>
              Developed by
              <img
                src="./images/loho_sb.png"
                height={50}
                width={50}
                style={{ marginLeft: 10 }}
                alt="logo"
              />
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
