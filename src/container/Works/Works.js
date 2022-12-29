import React, { useState, useEffect } from "react";

import Carousel from "react-grid-carousel";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import "../Carousel/HomeCarousels.scss";
import "./Works.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  // function displayMarqueeElements() {
  //   const root = document.documentElement;
  //   const marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"));
  //   const marqueeContent = document.querySelector("ul.marquee-content");

  //   if (marqueeContent) {
  //     root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  //     for(let i = 0; i < Math.min(marqueeElementsDisplayed, marqueeContent.children.length); i++) {
  //     console.log(marqueeContent)
  //       marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  //     }
  //   } else {
  //     console.error("The element with class 'marquee-content' was not found in the document");
  //   }
  // }

  // Call the displayMarqueeElements function when the page loads
  // window.addEventListener("load", displayMarqueeElements);

  return (
    <>
      <h2 className="head-text">
        My <span>projects</span> Section
      </h2>

      <div className="container-xs">
        <Carousel cols={4} rows={1} gap={10} loop>
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
        {/* <div className="marquee">
          <ul className="marquee-content">
            {filterWork.map((work, index) => (
              <li key={index}>
                <img
                  src={urlFor(work.imgUrl)}
                  alt={work.name}
                  className="app__work-img"
                />
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__whitebg");
