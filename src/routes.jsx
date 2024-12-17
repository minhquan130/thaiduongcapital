import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutMaster from "./layouts/LayoutMaster/LayoutMaster";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import News from "./pages/News/News";
import Careers from "./pages/Careers/Careers";
import Contact from "./pages/Contact/Contact";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutMaster />}>
        <Route index element={<Home />} />
        <Route path={'about'} element={<About />} />
        <Route path={'products'} element={<Products />} />
        <Route path={'news'} element={<News />} />
        <Route path={'careers'} element={<Careers />} />
        <Route path={'contact'} element={<Contact />} />
      </Route>
    </Routes>
  );
}
