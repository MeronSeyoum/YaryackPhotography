
import React, { useEffect, useState } from 'react';

import './Counter.css';

export const Counter = () => {
  const [valueDisplays, setValueDisplays] = useState([]);

  useEffect(() => {
    const interval = 3000;

    const updateValueDisplays = () => {
      const valueElements = document.querySelectorAll('.num');

      // Make sure there are elements with the .num class on the page
      if (valueElements.length > 0) {
        setValueDisplays(valueElements);

        valueElements.forEach((valueDisplay) => {
          let startValue = 0;
          let endValue = parseInt(valueDisplay.getAttribute('data-val'));
          let duration = Math.floor(interval / endValue);
          let counter = setInterval(() => {
            startValue += 10;
            valueDisplay.textContent = startValue;
            if (startValue === endValue) {
              clearInterval(counter);
            }
          }, duration);
        });
      }
    };

    // Wait for the elements to be added to the DOM before trying to access them
    setTimeout(updateValueDisplays, 1);
  }, []);

  return (
    <div className="wrapper">
      <div className="counter">
        <i className="fas fa-list"></i>
        <span className="num" data-val="700">000</span>
        <span className="text">Complete Projects</span>
       
      </div> <div className="right_line"></div>
      <div className="counter">
        <i className="fas fa-smile-beam"></i>
        <span className="num" data-val="650">000</span>
        <span className="text">Happy Customers</span>
        
      </div><div className="right_line"></div>
      <div className="counter">
        <i className="fas fa-camera"></i>
        <span className="num" data-val="3300">000</span>
        <span className="text">Photograph</span>
       
      </div> <div className="right_line"></div>
      <div className="counter">
        <i className="fas fa-video"></i>
        <span className="num" data-val="500">000</span>
        <span className="text">Video </span>
      </div>
    </div>
  );
};