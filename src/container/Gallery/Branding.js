import React, { useState, useEffect } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import './gallery.scss';
import { urlFor, client } from '../../client';


import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Branding = () => {

  // Sanity: data retrieve from brand achive in a form of array
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const query = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setBrands(data);
    });
  }, []);

  // Gallery display selected image
  const [model, setModel] = useState(false);
  const [tempimgUrl, setTempImgUrl] = useState('');

  const getImg = (imgUrl) => {
    setTempImgUrl(imgUrl);
    setModel(true);
  }

  return (
    <>
      {/** model display section for selected imaged */}
      <div className={model ? "model open" : "model"}>
        <img src={tempimgUrl} alt='' />
        <CloseButton variant="white" onclick={() => setModel(true)} />
      </div>

      {/**list image displayed in this section */}
      <div className='app__header'>
        <h4 className='head-text'>Branding Photo for <span>Modeling</span> and <span>Commercial</span></h4>
      </div>
      <div className='app__gallery'>

        {brands.map((brand, index) => {
          return (
            <div className='pics' key={index} onClick={() => getImg(urlFor(brand.imgUrl))}>
              <LazyLoadImage
                effect='blur'
                src={urlFor(brand.imgUrl)}
                style={{ width: '100%' }}
                alt={brand.title}
                placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Branding