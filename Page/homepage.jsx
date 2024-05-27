
import React from "react"
import Navbar from "../src/components/Navbar/index";
import Banner from "../src/components/Banner"
import Products from "../src/components/Products/Products"
import Footer from "../src/components/Footer/Footer";

function homepage() {
  return (
    <>
  <Navbar/>
  <Banner/>
  <Products/>
  <Footer/>
  </>
  );
}
export default homepage;
