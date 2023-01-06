import React, { useState, useEffect } from "react";

import Carousel from "react-grid-carousel";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import "../Carousel/HomeCarousels.scss";
import "./Works.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const query = '*[_type == "gallery"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>projects</span> Section
      </h2>

      <div className="container-xs">
        <Carousel cols={4} rows={2} gap={10} loop autoplay={2000}>
          {filterWork.map((work, index) => (
            <Carousel.Item key={index}>
              <img
                width="100%"
                src={urlFor(work.imgUrl)}
                alt={work.name}
                className="app__work-img"
              />
            </Carousel.Item>
          ))}
        </Carousel>
       
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__whitebg");
