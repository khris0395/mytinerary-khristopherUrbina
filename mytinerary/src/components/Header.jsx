import React, { useState } from 'react';

const Header = () => {
  
  const [abrirHamburguesa, setAbrirHamburguesa] = useState(false);

  const cambioHamburguesa = () => {
    setAbrirHamburguesa(!abrirHamburguesa);
  };

  return (
    <header className=" fixed  z-10 bg-gray-600 text-white shadow-md w-screen ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">My Tinerary</a>
        </div>

        {/* NavBar */}

        <nav className="hidden md:flex space-x-6 items-center">

            <a href="/" className="hover:text-gray-200">Home</a>
            <a href="/about" className="hover:text-gray-200">Cities</a>

            <a href="/"  className="hidden md:flex justify-between items-center">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-9 h-9" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>

                <div className='px-2'>

                    <p className='font-bold'>Login</p>

                </div>
            </a>

        </nav>

        {/* boton hamburguesa */}
        <div className="md:hidden">
          <button onClick={cambioHamburguesa} className="focus:outline-none"  /* clases o propiedad sin aparente utilidad*/>
            <svg
              className="w-6 h-6"
              fill="none"  /* clases o propiedad sin aparente utilidad*/
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
        
      </div>

      {/* NavBar Responsive */}
      
        <div className={`md:hidden bg-gray-700 transition-all duration-1000 ease-in-out ${abrirHamburguesa ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            
            <div className="flex flex-col items-center space-y-4 py-4">

                <a href="/"  className=" items-center">
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-9 h-9" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                    </svg>


                    <div className=''>

                        <p className='font-bold'>Login</p>

                    </div>
                 </a>

            </div>

          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="/" className="hover:text-gray-200">Home</a>
            <a href="/about" className="hover:text-gray-200">Cities</a>
          </nav>
        </div>
    </header>
  );
};

export default Header;