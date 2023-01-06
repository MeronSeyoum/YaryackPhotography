import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
//import ResizeImage from 'react-resize-image'
//import { AiFillEye } from 'react-icons/ai';
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
    <>
     
      <div className="counters"></div>
      <h1 className="head-text">Photography <span>Services</span></h1>
      <p className="head-text">
        We all want to keep the good memories as long as we can. With a
        photograph, we can do that. love helping people record the heart of
        their moments.
      </p>
      <br />

      <div className="app__about">
        <div className="app__profile">
          {about.map((about, index) => (
            

            <div class="card" >
               <motion.div
                // whileInView={{ opacity: 1 }}
                //whileHover={{scale: 1.15}}
                //transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__profile-item"
                key={index}
              >
                 <a href="gallery" rel="noreferrer">
              <img
                    src={urlFor(about.imgUrl)}
                    alt={about.title}
                    className="card-image card-img-top"
                  />
                  <h2 className="bold-text">
                    {about.title}
                    <span className="arrow">&#8594;</span>
                  </h2></a>
 </motion.div>
  <div class="card-body">
    {/* <h5 class="card-title">Card title</h5> */}


    <p class="card-text p-text box"> {showMore ? about.description : `${about.description.substring(0, 100)}`}
    <button class="btn-primary " onClick={() => setShowMore(!showMore)}>
    {showMore ? "Show less" : "Show more"}
    </button></p>
  </div>
</div>
            
              
          
          ))}
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
