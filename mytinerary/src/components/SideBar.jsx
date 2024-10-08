import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" },
];

function SideBar(){

  const [menuLateralAbierto, setMenuLateralAbierto] = useState(false)

  const cambioMenuLateral = () => {
    setMenuLateralAbierto(!menuLateralAbierto);
  };

  return (

    <div className="bg-gray-800 py-3 fixed top-40 -left-11 min-w-20 min-h-10 shadow-md items-start rounded-full z-20">

      <button className="ml-11" onClick={cambioMenuLateral}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <div className={`${!menuLateralAbierto? "hidden":"bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm"}`} onClick={() => setMenuLateralAbierto(false)}></div>

      <div className={`${menuLateralAbierto ? "w-80" : "w-0"} bg-gray-800 min-h-screen fixed top-16 left-0 transition-all duration-300`}>
        <div className={`${!menuLateralAbierto? "hidden" : "pt-3"}`}>
            <div className='flex flex-col py-5'>

                {routes.map((rout,index) => (

                <NavLink key={index} to={rout.to} onClick={() => setMenuLateralAbierto(false)} className="text-center text-white text-xl hover:bg-gray-300 hover:text-gray-600 cursor-pointer py-3 mb-2" >{rout.text}</NavLink>

                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar