import React, { useState, useEffect } from "react";

import Carousel from "react-grid-carousel";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import "../Carousel/HomeCarousels.scss";
import "./Works.scss";

const Project = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const query = '*[_type == "project"]';

    client.fetch(query).then((data) => {
      setProject(data);
     
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>projects</span> Section
        <div className="counters"></div>
      </h2>

      <div className="container-xs">
        <Carousel cols={3} rows={1} gap={20} loop autoplay={2000}>
          {project.map((work, index) => (
            <Carousel.Item key={index}>
              <img
                width="100%"
                src={urlFor(work.imgUrl)}
                alt={work.name}
                className="app__work"
              />
            </Carousel.Item>
          ))}
        </Carousel>
       <div className="booking">
    <h3 className="header"> Book with us today</h3>  
    <p>
We are here to help you make lasting memories. We now offer online booking so you can setup an appointment from home. All bookings come with free consultation so we can discuss how to make your dream photo a reality.
</p> </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Project, "app__works"), "Project", "app__whitebg");
