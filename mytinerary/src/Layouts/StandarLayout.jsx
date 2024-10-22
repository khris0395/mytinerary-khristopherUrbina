import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function StandarLayout() {
  return (
    <>   
        <ScrollToTop />
        <header>

            <NavBar></NavBar>
            <SideBar></SideBar>

        </header>
        <main>

            <Outlet></Outlet>

        </main>
        <footer>

            <Footer></Footer>
            
        </footer>

    </>
  );
}