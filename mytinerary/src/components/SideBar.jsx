import React, { useState } from 'react'

const SideBar = () => {

  const [menuLateralAbierto, setMenuLateralAbierto] = useState(false)

  const cambioMenuLateral = () => {
    setMenuLateralAbierto(!menuLateralAbierto);
  };

  return (

    <div className='bg-gray-500 py-3 fixed top-40 -left-11 min-w-20 min-h-10 shadow-md items-start rounded-full'>

      <button className='ml-11' onClick={cambioMenuLateral}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <div className={`${!menuLateralAbierto? "hidden":"bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm"}`} onClick={() => setMenuLateralAbierto(false)}></div>

      <div className={`${menuLateralAbierto ? "w-80" : "w-0"} bg-gray-600 min-h-screen fixed top-10 left-0 transition-all duration-300`}>
        <div className={`${!menuLateralAbierto? "hidden" : "pt-3"}`}>
            <button className='ml-4 text-white mt-8 mb-9' onClick={cambioMenuLateral}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className='flex flex-col'>
                <a className='text-center text-white text-xl hover:bg-gray-300 hover:text-gray-600 cursor-pointer py-3 mb-2'>Link 1</a>
                <a className='text-center text-white text-xl hover:bg-gray-300 hover:text-gray-600 cursor-pointer py-3 mb-2'>Link 2</a>
                <a className='text-center text-white text-xl hover:bg-gray-300 hover:text-gray-600 cursor-pointer py-3 mb-2'>Link 3</a>
                <a className='text-center text-white text-xl hover:bg-gray-300 hover:text-gray-600 cursor-pointer py-3 mb-2'>Link 4</a>
                <a className='text-center text-white text-xl hover:bg-gray-300 hover:text-gray-600 cursor-pointer py-3 mb-2'>Link 5</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar