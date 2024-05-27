
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Products from "./components/Products/Products"
import Footer from "./components/Footer/Footer";
import Pagination from "./components/Pagination/paginate";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
  <Navbar/>
  <Banner/>
  <Sidebar/>

  <Products/>
 
  <Footer/>
  </>
  );
}
export default App;


