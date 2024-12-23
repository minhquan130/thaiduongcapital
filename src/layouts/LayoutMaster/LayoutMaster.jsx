import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header";
import Main from "../Main/Main";

function LayoutMaster() {
  const location = useLocation();
  const [isAdminPage, setIsAdminPage] = useState(false);

  // Cập nhật trạng thái khi location thay đổi
  useEffect(() => {
    setIsAdminPage(location.pathname.includes('admin'));
  }, [location]);

  return (
    <>
      {!isAdminPage && <Header />}
      <Main>
        <Outlet />
      </Main>
      {!isAdminPage && <Footer />}
    </>
  );
}

export default LayoutMaster;
