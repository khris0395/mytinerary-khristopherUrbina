import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from "../store/actions/actionFetchCities";


function Carousel(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const dispatch = useDispatch();
    const { cities } = useSelector((state) => state.cities);

    useEffect(() => {
        dispatch(fetchCities(""));
      }, [dispatch]);

    // Cambiar automáticamente cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Hay 3 slides (0, 1, 2)
        }, 5000);
        return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
    }, []);


    // Mover a la siguiente slide
    const nextSlide = () => {
             setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };

    // Mover a la slide anterior
    const prevSlide = () => {
             setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3)
    };

    //Empaquetar el array en un nuevo array de 4x4

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          result.push(array.slice(i, i + chunkSize));
        }
        return result;
      };
    
    const cityChunks = chunkArray(cities, 4);


    return (
        <div className="container mx-auto md:w-1/2 pt-16 pb-14">

            <h2 className="text-gray-200 text-4xl font-bold text-center mb-8">Popular Cities</h2>

            {/* contenedor del carousel */}
            <div className="relative">

                <button
                    onClick={prevSlide}
                    className=" hidden absolute md:flex items-center justify-center w-12 h-12 top-1/2 left-0 z-10  transform -translate-y-1/2 bg-black text-white p-2 rounded-full transition ease-in-out delay-150 hover:scale-125 hover:opacity-80"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left-circle w-11 h-11" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="hidden absolute md:flex items-center justify-center w-12 h-12 top-1/2 right-0 z-10 transform -translate-y-1/2 bg-black text-white p-2 rounded-full transition ease-in-out delay-150 hover:scale-125 hover:opacity-80"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-circle w-11 h-11" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                </button>

                <div className="container overflow-hidden relative">

                    <div
                        className="flex transition-transform duration-700"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {cityChunks.map((chunk, chunkIndex) => (

                            <div key={chunkIndex} className="w-full flex-shrink-0 grid md:grid-cols-2 gap-4 ">
                                {chunk.map((city, index) => (
                                    <div key={index} className="relative">
                                    <img src={city.photo} alt={city.name} className="w-full h-full object-cover rounded-lg" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xl font-semibold text-center rounded-lg py-3">
                                        {city.name}
                                    </div>
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>

                </div>



            </div>

            
        </div>
    );
};

export default Carousel;
