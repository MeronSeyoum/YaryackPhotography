import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  const [showMore, setShowMore] = useState(false);
  
  return (
    <div className="app__about app__flex">
      <h1 className="head-text">
        Photography <span>Services</span>
        <div className="counters"></div>
      </h1>
      <p className="head-text">
        We all want to keep the good memories as long as we can. With a
        photograph, we can do that. love helping people record the heart of
        their moments.
      </p>
      <br />

      <div className="app__profile">
        {about.reverse().map((about, index) => (
          <div className="card">
            <motion.div
               whileInView={{ opacity: 1 }}
              // whileHover={{scale: 1.15}}
              transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              className="app__profile-item"
              key={index + 1}
            >
              <a href ={`/gallery/${about.title}`} >
                <img
                  src={urlFor(about.imgUrl)}
                  alt={about.title}
                  className="card-image card-img-top"
                />
                <div className="title">
                  <h2 className="bold-text">{about.title}</h2>
                  <span className="arrow">&#8594;</span>
                </div>
              </a>
            </motion.div>
            <div className="card-body">
              <p className="box" >
                {showMore[about.title]
                  ? about.description
                  : `${about.description.substring(0, 100)}`}
                <br /><button
                  className="btn"
                  onClick={() => setShowMore({...showMore, [about.title] : !showMore[about.title]})}
                >
                  {showMore[about.title] ? "Show less" : "Show more"}
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
