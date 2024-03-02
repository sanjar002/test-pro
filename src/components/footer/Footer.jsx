import React, { useRef } from "react";
import CartHome from "./CartHome";
import "./Footer.scss";
import Nav from "./images/nav.png";
import Telephone from "./images/telephone.png";
import Instagram from "./images/instagram.png";
import { useInView } from "framer-motion";
import Gmail from "./images/gmail.png";
import Facebook from "./images/facebook.png";
import Towardz from "./images/carta.png";

const Footer = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <footer>
      <div className="container">
        <div className="map">
          <div className="navigation" ref={ref}>
            <span className="nav">
              <img src={Nav} alt="" />
            </span>
            <h1
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                fontSize: "30",
              }}>
              Биздин Дарек {children}
            </h1>
          </div>
          <div className="carta">
            <div className="mapAround">
              <CartHome />
            </div>
            <div className="border">
            </div>
            <div className="infoFoots">
              <div
                className="telephone"
                style={getStyle(isInView, "none", "translateX(200px)")}
              >
                {children}
                <img src={Telephone} alt="" />
                <p className="okurmen_it" style={{ width: "200px" }}>
                  +999 (709)-677-798
                </p>
              </div>
              <div
                className="instagram"
                style={getStyle(isInView, "none", "translateX(-200px)")}
              >
                {children}
                <img src={Instagram} alt="" style={{ paddingTop: "30px" }} />
                <p className="okurmen_it" style={{ width: "200px" }}>
                  okurmen_it.
                </p>
              </div>
              <div
                className="gmail"
                style={getStyle(isInView, "none", "translateX(200px)")}
              >
                {children}
                <img src={Gmail} alt="" style={{ paddingTop: "30px" }} />
                <p className="okurmen_it">okurmen@gmail.com</p>
              </div>
              <div
                className="facebook"
                style={getStyle(isInView, "none", "translateX(-200px)")}
              >
                {children}
                <img src={Facebook} alt="" style={{ paddingTop: "30px" }} />
                <p className="okurmen_it" style={{ width: "200px" }}>
                  okurmen_it
                </p>
              </div>
              <div
                className="towards"
                style={getStyle(isInView, "none", "translateX(200px)")}
              >
                <img src={Towardz} alt="" style={{ paddingTop: "30px" }} />
                <p className="okurmen_it" style={{ width: "200px" }}>
                  Турусбекова 109/1 Максимум <br /> БЦ 4-этаж, 407 / 411 -
                  аудитория
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const getStyle = (isInView, transform) => ({
  display: "flex",
  alignItems: "center",
  gap: "30px",
  transform: isInView ? "none" : transform,
  opacity: isInView ? 1 : 0,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  filter:"",
});



export default Footer;
