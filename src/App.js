import React from "react";
import { Routes, Route } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import {
  Header,
  About,
  Footer,
  Skills,
  Testimonials,
  Works,
  Gallery,
  VideoPlayer,
  Counter,
} from "./container";
import { Navbar } from "./components";
import { SocialMediaPhone } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Counter />
              <About />
              <Works />
              <Testimonials />
              {/* <Skills /> */}
              <VideoPlayer />
            </>
          }
        />

        <Route path="gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <SocialMediaPhone />.
    </div>
  );
};
export default App;
