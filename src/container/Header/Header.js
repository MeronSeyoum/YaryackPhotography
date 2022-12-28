import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// import Calendar from "react-calendar";
// import "./book.scss";
// import "react-calendar/dist/Calendar.css";

import "./Header.scss";
import { images } from "../../Constansts";

// const scalevariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
//  };
const Header = () => {
  //   // const [date, setDate] = useState(new Date());

  //   // const navigate = useNavigate();
  //   // const [modal, setModal] = useState(false);

  //   // const toggleModal = () => {
  //   //   setModal(!modal);
  //   // };

  //   // // if (modal) {
  //   // //   document.body.classList.add("active-modal");
  //   // // } else {
  //   // //   document.body.classList.remove("active-modal");
  //   // // }
  return (
    <div className="app__header app__flex">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <div className="carousel-caption">
              <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
              >
                <div className="app__header-badge">
                  <div className="badge-cmp app__flex">
                    <div style={{ marginLeft: 10 }}>
                      <p className="p-text">Hello, I am </p>
                      <h1 className="head-text">Yared Yacob</h1>
                    </div>
                    <span> 👋 </span>
                  </div>
                  <div className="tag-cmp app__flex">
                    <p className="p-text">
                      Creative Design create culture. Culture shapes value.
                      <br />
                      Value determine the future.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <img src={images.profile0} className="d-block w-100" alt="" />
          </div>

          <div className="item">
         
      <video className="" loop autoplay="" muted>
        <source
          src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
          type="video/mp4"
        />
      </video>
      
          </div>
          <div className="item">
            <img src={images.profile1} className="d-block w-100" alt="" />
          </div>

          <div className="item">
            <img src={images.profile2} className="d-block w-100" alt="" />
          </div>
        </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
