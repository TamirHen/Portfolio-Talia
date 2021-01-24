import React from "react";

import "./Footer.css";

const Footer = (props) => {
  return (
    <footer>
      <section className="upper footer-section">
        {props.data.footerText.split("\n").map((line) => (
          <>
            <p className="text-line">{line}</p>
          </>
        ))}
      </section>
      <section className="lower footer-section">
        {`©${new Date().getFullYear()} Tamir Hen. All rights reserved.`}
      </section>
    </footer>
  );
};

export default Footer;
