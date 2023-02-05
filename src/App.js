import React from "react";
import { Routes, Route } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import {
  Header,
  About,
  Footer,
  Footer2,
  // GalleryModel,
  Testimonials,
  Project,
  Gallery,
  VideoPlayer,
  Counter,
} from "./container";
import { SocialMediaPhone } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
    
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              
              <About />
               <Project />
               <Counter />
             
              <Testimonials />
              {/* <GalleryModel /> */}
              <VideoPlayer />
            </>
          }
        />

        <Route path="gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<Gallery />} />
      </Routes>
      <Footer />
      <Footer2 />
      <SocialMediaPhone />
    </div>
  );
};
export default App;
