import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "react-bootstrap/button";
import "./gallery.scss";
import "../Project/Works.scss";
// import "../Header/Header.scss";
import { urlFor, client } from "../../client";
import { images } from "../../Constansts";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { GalleryModel } from "./Gallery";
const Gallerys = () => {
  const [galleys, setGalleys] = useState([]);
  const [filterGalleys, setFilterGalleys] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const id = useParams();

  useEffect(() => {
    const query = '*[_type == "gallery"]';

    client
      .fetch(query)
      .then((data) => {
        setGalleys(data);

        if (id) {
          setActiveFilter(id);
          setFilterGalleys(
            data.filter((gallery) =>
              gallery.tags.includes(JSON.parse(JSON.stringify(id.id)))
            )
          );
        } else {
          setFilterGalleys(data);
        }
      })
      .catch((error) => {
        console.log("Error while fetching data from server: ", error);
      });
  }, [id]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setTimeout(() => {
      if (item === "All") {
        setFilterGalleys(galleys);
      } else {
        setFilterGalleys(
          galleys.filter((gallery) => gallery.tags.includes(item))
        );
      }
    }, 500);
  };

  // Gallery display selected image
  const [model, setModel] = useState(false);
  const [modelImgUrl, setModelImgUrl] = useState("");

  const getImg = (imgUrl) => {
    setModelImgUrl(imgUrl);
    setModel(true);
  };

  return (
    <>

      <div className="gallery">
      <div className="app__navbar-logo">
          <a href="/">
            <p className="logo__header">
              <img src={images.logo} alt="Yaryack Photography" />
              Yaryack<span className="logo_title"> Photography</span>
            </p>
          </a>
        </div>
        {/** model display section for selected imaged */}

      <div className={model ? "model open" : "model"}>
        <div className="container">
         
          {/* <GalleryModel modelImgUrl={modelImgUrl} filterGalleys={filterGalleys}/> */}
          {/* <div
         id="carousel-example-generic"
         class="carousel slide"
         data-ride="carousel"
       >
         <div class="carousel-inner" role="listbox">
           <div class="item active">
             <img src={modelImgUrl} alt="" className="modal-img"  style={{ width: '100%' }} />
           </div>

           {filterGalleys.map((gallery, index) => {
             return (
               <div className="item " key={index}>
                 <img src={urlFor(gallery.imgUrl)} alt=""  className="modal-img"/>
               </div>
             );
           })}

           <a
             class="left carousel-control"
             href="#carousel-example-generic"
             role="button"
             data-slide="prev"
           >
             <span
               class="glyphicon glyphicon-chevron-left"
               aria-hidden="true"
             ></span>
             <span class="sr-only">Previous</span>
           </a>
           <a
             class="right carousel-control"
             href="#carousel-example-generic"
             role="button"
             data-slide="next"
           >
             <span
               class="glyphicon glyphicon-chevron-right"
               aria-hidden="true"
             ></span>
             <span class="sr-only">Next</span>
           </a>
         </div>
       </div>  */}
          <a
            type="button"
            className="btn-close btn-close-black"
            aria-label="Close"
            onClick={() => setModel(false)}
          ></a>
        </div>
      </div>

       
        {/* Gallery for all services */}
        <div className="gallery_header">
          <h1>Gallery</h1>
        </div>
        <div className="app__work-filter app__header">
          {[
            "Wedding",
            "Event",
            "Engagement",
            "Maternity",
            "Portrait",
            "All",
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="app__gallery">
          {filterGalleys.map((gallery, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(urlFor(gallery.imgUrl))}
              >
                <LazyLoadImage
                  effect="blur"
                  src={urlFor(gallery.imgUrl)}
                  style={{ width: "100%" }}
                  alt={gallery.title}
                  placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallerys;
