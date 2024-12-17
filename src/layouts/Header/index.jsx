import React from "react";
import "./Header.scss";
import TopHeader from "./TopHeader";
import MainHeader from "./MainHeader";

function Header() {
  return (
    <header>
      <TopHeader />
      <MainHeader />
    </header>
  );
}

export default Header;
