import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p className="footer-test">
        Made By
        <span className="footer-MadeBy">
          {" "}
          Srikanth Gunalapuri (2020 - {currentYear})
        </span>
      </p>
    </div>
  );
};

export default Footer;
