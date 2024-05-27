
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../Page/homepage"
import ProductDetail from "../Page/ProductDetail";
function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/ProductDetail" element={<ProductDetail />} />
    </Routes>
    </Router>
  </div>
  );
}
export default App;


