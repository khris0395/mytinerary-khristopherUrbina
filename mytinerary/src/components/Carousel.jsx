import React, { useState, useEffect } from 'react';

// Lista de ciudades e imágenes (puedes cambiar las URLs)
const cities = [
    { name: 'New York', img: 'https://i.pinimg.com/originals/f9/b9/8e/f9b98ecc59ebabadeb9f47822ddb1cb2.jpg' },
    { name: 'Paris', img: 'https://i.pinimg.com/originals/d2/79/75/d279756f716d031bbc142bba3ba557ca.jpg' },
    { name: 'London', img: 'https://plus.unsplash.com/premium_photo-1682799116921-de130f76c1d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwbG9uZHJlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Tokyo', img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Sydney', img: 'https://plus.unsplash.com/premium_photo-1697730198238-48ee2f2fe1b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3lkbmV5fGVufDB8fDB8fHww' },
    { name: 'Dubai', img: 'https://plus.unsplash.com/premium_photo-1661916762370-4768aa1fc4c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHViYWl8ZW58MHx8MHx8fDA%3D' },
    { name: 'Rome', img: 'https://plus.unsplash.com/premium_photo-1661963265512-73e8d1053b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tYSUyMGl0YWxpYXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Amsterdam', img: 'https://top20.amsterdam/images/redlightdistrict.jpg' },
    { name: 'Berlin', img: 'https://previews.123rf.com/images/rudi1976/rudi19761406/rudi1976140600008/29303810-berl%C3%ADn-vista-a%C3%A9rea-de-berl%C3%ADn-durante-el-hermoso-atardecer.jpg' },
    { name: 'Hong Kong', img: 'https://media.istockphoto.com/id/629604122/es/foto/paisaje-urbano-de-hong-kong-y-junkboat-en-crep%C3%BAsculo.jpg?s=612x612&w=0&k=20&c=PaIwDzYq_JRDe-aqKENWW8LEv5zbuKTyt_ojYA3UHZw=' },
    { name: 'Barcelona', img: 'https://cdn.pixabay.com/photo/2016/03/24/07/31/spain-1276209_640.jpg' },
    { name: 'Rio de Janeiro', img: 'https://st2.depositphotos.com/6644020/11217/i/950/depositphotos_112172136-stock-photo-rio-de-janeiro-aerial.jpg' }
];

function Carousel(){
    const [currentSlide, setCurrentSlide] = useState(0);

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
             setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3) // Asegurar que sea circular
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
                                    <img src={city.img} alt={city.name} className="w-full h-full object-cover rounded-lg" />
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
