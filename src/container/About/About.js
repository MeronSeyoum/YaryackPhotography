import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
//import ResizeImage from 'react-resize-image'
//import { AiFillEye } from 'react-icons/ai';

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h1 className="head-text">PHOTOGRAPHY SERVICES</h1>
      <h3 className="head-text">We Specialize In:</h3>
      <br />

      <div className="app__about">
        <div className="app__profile">
          {abouts.map((about, index) => (
            <motion.div
              // whileInView={{ opacity: 1 }}
              //whileHover={{scale: 1.15}}
              //transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              className="app__profile-item"
              key={index}
            >
              <a href='gallery' rel="noreferrer">
                <img
                  src={urlFor(about.imgUrl)}
                  alt={about.title}
                  className="card-image"
                />

                <h2 className="bold-text">
                  {about.title}
                  <span className="arrow">&#8594;</span>
                </h2>
                {/* <p className="p-text" >{about.description}</p> */}
              </a>
            </motion.div>
          ))}

          {/* 2 row if the list */}
          {/* {abouts.slice(3,5).map((about, index) => (
            <motion.div
             // whileInView={{ opacity: 1 }}
             whileHover={{ opacity: [1, 0.5] }}
             transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              className="app__profile-itemTwoCol"
              key={about.title + index}
            >
              <a href={about.title} rel="noreferrer">
                <img src={urlFor(about.imgUrl)} alt={about.title} />              
              </a>
              <h2 className="bold-text" >
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 5 }}>
                {about.description}
              </p>
            </motion.div>
          ))} */}
        </div>
      </div>
      
    </>
  );
};
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
