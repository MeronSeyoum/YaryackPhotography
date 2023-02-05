import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../Carousel/HomeCarousels.scss";

import "./Header.scss";
import { images } from "../../Constansts";
import { urlFor, client } from "../../client";

import { Navbar } from "../../components";
const Header = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const query = '*[_type == "header"]';

    client.fetch(query).then((data) => {
      setHeaders(data);
    });
  }, []);

  return (
    <>
    <Navbar />
    <div className="app__header app__flex">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">

          <div className="item active">
            <img src={images.profile0} className="d-block w-100" alt="" />
          </div>

          {headers.map((head, index) => (
            <div className="item"  key={index}>
              <div className="carousel-caption">
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__header-info"
                >
                  <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                      <div style={{ marginLeft: 10 }}>
                        <p className="p-text">{head.header}</p>
                        <h1 className="head-text">{head.title}</h1>
                      </div>
                    </div>
                    <div className="tag-cmp app__flex">
                      <p className="p-text">{head.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <img
                src={urlFor(head.imgUrl)}
                alt={head.title}
                className="d-block w-100"
              />
            </div>
          ))}
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    </>
  );
};

export default Header;
