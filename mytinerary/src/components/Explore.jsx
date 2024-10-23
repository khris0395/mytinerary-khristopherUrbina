import React from 'react'
import { useNavigate, useLocation} from 'react-router-dom'

function Explore(){

    const navigate = useNavigate()
    const location = useLocation();
    const object = location.state
    console.log(object);

    //funcion para regresar a la pagina anterior

    function navigateBack(){
        navigate(-1)
      }

    return(

        <div className="relative h-screen w-screen">
            <img
                className="absolute inset-0 w-full h-full object-cover  bg-black opacity-50"
                src={object.photo}
                alt="Background"
            />
            <div className="absolute inset-0"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
                <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8">
                {object.name}
                </h1>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                Under Construction... 🚧
                </h2>
                <p className="text-2xl text-gray-200 mb-12 max-w-2xl">
                We're working hard to bring you something amazing. Please check back later.
                </p>
                <button onClick={()=>navigateBack()} className="bg-zinc-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-zinc-700 hover:scale-105 transform transition duration-300 ease-in-out shadow-xl">
                Back to Cities
                </button>
            </div>
            </div>


)




}

export default Explore