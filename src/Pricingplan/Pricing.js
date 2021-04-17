import React from "react";
import Navbar from '../Landing/components/Navbar'
import Pricing from "./pricing/TwoPlansWithDurationSwitcher.js";
import Footer from "../Landing/components/Footer";

export default () => {
  return (
    <>
      
      <Navbar/>
      <div className="bg-dark text-white">
      <Pricing />
      <Footer/>

      </div>
     
     
     
    </>
  );
};
