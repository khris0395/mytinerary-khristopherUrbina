import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" },
];

function SideBar(){

  const [openSideBar, setOpenSideBar] = useState(false)

  const changeSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (

    <>

    <div className="bg-gray-800 py-3 fixed top-40 -left-16 min-w-28 min-h-10 items-start rounded-full border-2 border-black z-20 transition ease-in-out delay-150 hover:translate-x-3">

        <button className="ml-16" onClick={changeSideBar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-compass w-7 h-7" viewBox="0 0 16 16">
                <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
            </svg>
      </button>

    </div>

    <div className={`${!openSideBar? "hidden":"bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-20"}`} onClick={changeSideBar}>
    </div>

    <div className={`${openSideBar ? "w-80" : "w-0"} bg-gray-800 min-h-screen fixed top-20 left-0 transition-all duration-300 z-20`}>
        <div className={`${!openSideBar? "hidden" : "pt-20"}`}>
            <div className="flex flex-col">

                {routes.map((rout,index) => (

                <NavLink key={index} to={rout.to} onClick={changeSideBar} className="text-center text-white text-xl hover:bg-gray-300 hover:text-gray-600 cursor-pointer py-3 mb-2" >{rout.text}</NavLink>

                ))}
            </div>
        </div>
    </div>

    
    

    </>
  )
}

export default SideBar