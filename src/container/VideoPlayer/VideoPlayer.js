import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";

 import "./Slider.css";

const items = [
<div className="item">
    <video width="100%" controls className="media">
      <source src='https://player.vimeo.com/external/399992302.sd.mp4?s=97e758118881dffc6105f989c3f0e803f230287a&profile_id=164&oauth2_token_id=57447761' />
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="item">
    <video width="100%" controls className="media">
      <source src='https://player.vimeo.com/external/368342695.sd.mp4?s=32d1dbdb51a79c54621631f0d31650c4b8d65e43&profile_id=164&oauth2_token_id=57447761' />
      {/* <source src={images.video2} /> */}
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="item">
    <video width="100%" controls className="media">
      <source src='https://player.vimeo.com/external/369864201.sd.mp4?s=29184affcf788f25a894e402e5db9952c13042f4&profile_id=164&oauth2_token_id=57447761' />
      Your browser does not support the video tag.
    </video>
  </div>
];
const VideoPlayer = () => {
  const [mainIndex, setMainIndex] = useState(0);

  const slideNext = () => {
    if (mainIndex < items.length - 1) {
      setMainIndex(mainIndex + 1);
    }
  };

  const slidePrev = () => {
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <AliceCarousel
        activeIndex={mainIndex}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
      <p className="index">{`${mainIndex + 1}/${items.length}`}</p>
      <div className="caption-container">
        <p className="caption">
          description here
        </p>
      </div>

      <div className="btn-prev" onClick={slidePrev}>
        &lang;
      </div>
      <div className="btn-next" onClick={slideNext}>
        &rang;
      </div>
    </div>
  );
};
export default VideoPlayer;