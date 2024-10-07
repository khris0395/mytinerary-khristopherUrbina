import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SideBar from "../components/SideBar";

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
            <h2>
            <footer className="flex w-full h-32 items-center justify-center bg-black text-white">soy el footer</footer>
            </h2>
        </footer>

    </>
  );
}