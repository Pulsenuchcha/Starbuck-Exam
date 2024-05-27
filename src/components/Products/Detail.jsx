import React, { useState, useEffect } from 'react';
import './Detail.css';

function Detail(){
 return(
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://iili.io/H8Y7WEg.webp" className="max-w-sm rounded-lg shadow-5xl" />
    <div className="text-content">
      <h1 className="text-5xl font-bold">Signature Blend</h1>
      <div className="category bg-black text-white px-2 py-1 rounded-full inline-block">
               whole Bean
              </div>
      <p className="py-6">A rich, full-bodied coffee with notes of dark chocolate and black cherry. Grown on the slopes of a mist-covered mountain in Central America.</p>
    </div>
  </div>
</div>
    )
}
export default Detail;