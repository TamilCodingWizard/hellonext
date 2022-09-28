import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
