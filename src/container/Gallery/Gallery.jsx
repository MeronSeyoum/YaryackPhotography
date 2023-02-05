import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PT from "prop-types";

import { urlFor, client } from "../../client";
import { images } from "../../Constansts";
import "./gallery.scss";
import "../Project/Works.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";


const Gallery = () => {
  // fetch gallery from CMS and filter it
  const [galleys, setGalleys] = useState([]);
  const [filterGalleys, setFilterGalleys] = useState([]);
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

  const PhotoItem = ({ image, thumb }) => (
    <div className="pics">
      <LightgalleryItem src={image} thumb={thumb}>
        <LazyLoadImage
          src={image}
          placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"}
          effect="blur"
          style={{ width: "100%" }}
        />
      </LightgalleryItem>
    </div>
  );
  PhotoItem.propTypes = {
    image: PT.string.isRequired,
    thumb: PT.string,
    group: PT.string.isRequired,
  };

  // gallery tabs handler
  const [activeFilter, setActiveFilter] = useState("All");

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
  return (
    <div className="gallery">
      <div>
        {/* Gallery header and logo */}
        <div className="app__navbar-logo">
          <a href="/">
            <p className="logo__header">
              <img src={images.logo} alt="Yaryack Photography" />
              Yaryack<span className="logo_title"> Photography</span>
            </p>
          </a>
        </div>
        {/* Gallery tabs for all services */}
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
      </div>
      <LightgalleryProvider>
        <div className="app__gallery">
          {filterGalleys.map((p, idx) => (
            <PhotoItem
              key={idx}
              image={urlFor(p.imgUrl).toString()}
              group="group2"
            />
          ))}
        </div>
      </LightgalleryProvider>
    </div>
  );
};

export default Gallery;
