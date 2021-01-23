import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="upper footer-section">
        This site is a great example of what we have said before: sometimes it’s
        <br />
        enough to create an excellent “About me” page to promote your brand
        <br />
        (which, actually, will work as a full-fledged website).
      </section>
      <section className="lower footer-section">
        ©2021 Tamir Hen. All rights reserved.
      </section>
    </footer>
  );
};

export default Footer;
