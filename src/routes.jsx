import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutMaster from "./layouts/LayoutMaster/LayoutMaster";
import HomeUser from "./pages/user/Home/Home";
import About from "./pages/user/About/About";
import Products from "./pages/user/Products/Products";
import News from "./pages/user/News/News";
import Careers from "./pages/user/Careers/Careers";
import Contact from "./pages/user/Contact/Contact";
import HomeAdmin from "./pages/admin/Home/Home";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutMaster />}>
        <Route index element={<HomeUser />} />
        <Route path={'about'} element={<About />} />
        <Route path={'products'} element={<Products />} />
        <Route path={'news'} element={<News />} />
        <Route path={'careers'} element={<Careers />} />
        <Route path={'contact'} element={<Contact />} />
        <Route path={'admin'} element={<HomeAdmin />} >
          
        </Route>
      </Route>
    </Routes>
  );
}
