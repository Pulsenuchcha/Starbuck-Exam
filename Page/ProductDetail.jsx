import React from "react"
import Navbar from "../src/components/Navbar/index";
import Footer from "../src/components/Footer/Footer";
import Detail from "../src/components/Products/Detail"
function ProductDetail(){
    return(
        <>
        <Navbar/>
        <Detail/>
        <Footer/>
        </>
    );
}
export default ProductDetail;