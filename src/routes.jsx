import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutMaster from "./layouts/LayoutMaster/LayoutMaster";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutMaster />}>
        <Route index element={<Home />} />
        <Route path={'about'} element={<About />} />
      </Route>
    </Routes>
  );
}
