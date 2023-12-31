import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Dashboard from "./Dashboard";

function Shop() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Dashboard />} />
        <Route path ='/shop' element={<Home />} />
        <Route path ='/shop/create/' element={<Create />} />
        <Route path ='/shop/read/:id' element={<Read />} />
        <Route path ='/shop/edit/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Shop;
