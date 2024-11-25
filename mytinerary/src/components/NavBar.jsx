import React, { useState, useEffect } from 'react';
import { NavLink, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../store/actions/actionAuth';


function NavBar(){

  const routes = [

    { to: "/", text: "Home", unrequireAuth:false },
    { to: "/cities", text: "Cities", unrequireAuth:false },
    { to: "/singIn", text: "Sing In", unrequireAuth:true },
    { to: "/singUp", text: "Sing Up", unrequireAuth:true },
    
  ];


  const user = useSelector((state) => state.authStore.user)
  const token = useSelector((state) => state.authStore.token);
  const dispatch = useDispatch();
  
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

          {routes.map((rout,index) =>
          
           (!rout.unrequireAuth || !token) && (

            <NavLink key={index} to={rout.to} className="rounded-lg  p-3 transition duration-500 hover:text-gray-200 hover:bg-gray-800 hover:scale-105" >{rout.text}</NavLink>

          ))}
          
        </div>


      {token && (

        <div className='flex gap-2'>

      
        <button className="bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded"
        onClick={()=>dispatch(logout())}>
          Sign Out
        </button>

          <img
            src={user.userPhoto}
            alt="User profile"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
          />
          
        </div>)}

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
          {routes.map((rout,index) =>
          
          (!rout.unrequireAuth || !token) && (

           <NavLink key={index} to={rout.to} className="rounded-lg  p-3 transition duration-500 hover:text-gray-200 hover:bg-gray-800 hover:scale-105" >{rout.text}</NavLink>

         ))}
          </div>


        </div>
    </nav>
 
  );
};

export default NavBar