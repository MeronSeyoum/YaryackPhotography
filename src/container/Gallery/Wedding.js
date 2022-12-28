import React, { useState, useEffect } from 'react';
// import CloseButton from 'react-bootstrap/CloseButton';
import './gallery.scss';
import "../Works/Works.scss";
import { urlFor, client } from '../../client';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Wedding = () => {

  // Sanity: data retrieve from brand Schema in a form of array
  const [wedding, setWedding] = useState([]);

  useEffect(() => {
    const query = '*[_type == "wedding"]';

    client.fetch(query).then((data) => {
      setWedding(data);
    });
  }, []);

  // Gallery display selected image
  const [model, setModel] = useState(false);
  const [tempimgUrl, setTempImgUrl] = useState('');

  const getImg = (imgUrl) => {
    setTempImgUrl(imgUrl);
    setModel(true);
  }

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleWorkFilter = (item) => {
      setActiveFilter(item);
      setTimeout(() => {
        if (item === "All") {
          setFilterWork(works);
        } else {
          setFilterWork(works.filter((work) => work.tags.includes(item)));
        }
      }, 500);
    };
  return (
    <>
    {/** model display section for selected imaged */}
      <div className={model? "model open" : "model"}>
      <img src={tempimgUrl} alt='' style={{ width: '100%' }}/>
      {/* <CloseButton  variant="black" onclick={() => setModel(true)} /> */}
      </div>

{/**list images will displayed in this section */}
      <div className='app__header'>
      <h4 className='head-text'>Wedding Photo for <span>Traditional</span> and <span>Modern</span></h4>
      </div>
      <div className="app__work-filter">
        {[
          "Wedding",
          "Family",
          "Engagement",
          "Kids",
          "Maternity",
          "Branding",
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

      <div className='app__gallery'>
      
        {wedding.map((wedd, index) => {
          return (
            <div className='pics' key={index} onClick={() => getImg(urlFor(wedd.imgUrl))}>
           <LazyLoadImage 
            effect='blur'  
            src={urlFor(wedd.imgUrl)} 
            style={{ width: '100%' }} 
            alt={wedd.title} 
            placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"}/>
               </div>
          )
        })}
      </div>
    </>
  )
}

export default Wedding