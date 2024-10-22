import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

export default function StandarLayout() {
  return (
    <>   
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