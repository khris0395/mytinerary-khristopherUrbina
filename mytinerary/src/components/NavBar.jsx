import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){

  const routes = [
    { to: "/", text: "Home" },
    { to: "/cities", text: "Cities" },
  ];
  
  const [openHamburguer, setOpenHamburguer] = useState(false);

  const changeHamburguer = () => {
    setOpenHamburguer(!openHamburguer);
  };

  return (

    <nav className=" fixed bg-black opacity-90 text-white shadow-md w-full h-20 z-30">
      <ul className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">MyTinerary</a>
        </div>

        {/* NavBar */}

        <div className="hidden md:flex space-x-4 items-center ">

          {routes.map((rout,index) => (

            <NavLink key={index} to={rout.to} className="rounded-lg  p-3 transition duration-500 hover:text-gray-200 hover:bg-gray-800 hover:scale-105" >{rout.text}</NavLink>

          ))}

            <a href="/"  className="hidden md:flex justify-between items-center transition duration-500 hover:scale-125">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-9 h-9" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>

                <div className="px-2">

                    <p className="font-bold">Login</p>

                </div>
            </a>

        </div>

        {/* boton hamburguesa */}
        <div className="md:hidden">
          <button onClick={changeHamburguer} className="focus:outline-none px-6">
            <svg
              className="w-6 h-6"
              fill="none"  
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6 h16 M4 12 h16 M4 18 h16"
              ></path>
            </svg>
          </button>
        </div>
        
      </ul>

      {/* NavBar Responsive */}
      
        <div className={`md:hidden bg-black transition-all duration-1000 ease-in-out ${openHamburguer ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            
            <div className="flex flex-col items-center space-y-4 py-4">

                <a href="/"  className=" items-center">
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-9 h-9" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                    </svg>


                    <div>

                        <p className='font-bold'>Login</p>

                    </div>
                 </a>

            </div>

          <div className="flex flex-col items-center space-y-4 py-4">
            {routes.map((rout,index) => (

              <NavLink key={index} to={rout.to} className= "hover:text-gray-200" >{rout.text}</NavLink>

              ))}
          </div>
        </div>
    </nav>
 
  );
};

export default NavBar