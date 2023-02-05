import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";

import { images } from "../../Constansts";
import "react-alice-carousel/lib/alice-carousel.css";

import "./Slider.css";

import { url, client } from "../../client";

const VideoPlayer = () => {
  const [videoPlayer, setVideoPlayer] = useState([]);

  useEffect(() => {
    const query = '*[_type == "video"]';

    client.fetch(query).then((data) => {
      setVideoPlayer(data);
     
    });
  }, []);

 console.log(videoPlayer);

  const items = [
    // videoPlayer.map((video, index) => (
    //   <div className="item" key={index}>
    //     <video width="100%" controls className="media">
    //       {/* <source src='https://player.vimeo.com/external/399992302.sd.mp4?s=97e758118881dffc6105f989c3f0e803f230287a&profile_id=164&oauth2_token_id=57447761' /> */}
    //       <source src={video} />
    //       Your browser does not support the video tag.
    //     </video>
    //   </div>
    // )),
      <div className="item">
      <video width="100%" controls className="media">
        <source src='https://cdn.sanity.io/files/h5hl0ma5/production/098fe4eebf7113a00ca056fd05c7e5130cbd74c3.mp4' />

        {/* <source src={video.video.asset._ref} /> */}
          Your browser does not support the video tag.
      </video>
    </div>,
    <div className="item">
      <video width="100%" controls className="media">
        <source src='https://cdn.sanity.io/files/h5hl0ma5/production/184db7d5a61047f88dd3f40a664bf6d281768b7a.mp4' />

        {/* <source src={video.video.asset._ref} /> */}
          Your browser does not support the video tag.
      </video>
    </div>,
    <div className="item">
      <video width="100%" controls className="media">
        <source src='https://cdn.sanity.io/files/h5hl0ma5/production/088a23204417ef7d1a8d12af4e6745ebed50624a.mp4' />

        {/* <source src={video.video.asset._ref} /> */}
          Your browser does not support the video tag.
      </video>
    </div>

  ];

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
        <p className="caption">Video_Sample</p>
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
