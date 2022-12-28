import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  About,
  Footer,
  Family,
  Header,
  Skills,
  Testimonials,
  Works,
  Wedding,
  Maternity,
  Kids,
  Branding,
  Engagement,
  HomeCarousels,
  PhotoCategory,
} from "./container";
import { Navbar } from "./components";
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
              {/* <HomeCarousels /> */}
            <Header /> 
             <About />  
              <Works />
              <Testimonials />
              <Skills />
            </>
          }
        />
        <Route path="family" element={<Family />} />
        <Route path="engagement" element={<Engagement />} />
        <Route path="kids" element={<Kids />} />
        <Route path="wedding" element={<Wedding />} />
        <Route path="maternity" element={<Maternity />} />
        <Route path="branding" element={<Branding />} />
        <Route path="PhotoCategory" element={<PhotoCategory />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
