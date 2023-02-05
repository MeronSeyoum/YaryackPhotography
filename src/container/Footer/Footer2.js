import React from "react";
import { images } from "../../Constansts";
import "./Footer.scss";
const Footer2 = () => {
  return (
    <div className="footer">
      <img src={images.footer} alt="Yaryack Photography" />
      <p className="copyright">All content Copyright © 2023 Yaryackphotography</p>
    </div>
  );
};
export default Footer2;
