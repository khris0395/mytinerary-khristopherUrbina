import React, { useState, useEffect } from 'react';

// Lista de ciudades e imágenes (puedes cambiar las URLs)
const cities = [
    { name: 'New York', img: 'https://via.placeholder.com/300x200?text=New+York' },
    { name: 'Paris', img: 'https://via.placeholder.com/300x200?text=Paris' },
    { name: 'London', img: 'https://via.placeholder.com/300x200?text=London' },
    { name: 'Tokyo', img: 'https://via.placeholder.com/300x200?text=Tokyo' },
    { name: 'Sydney', img: 'https://via.placeholder.com/300x200?text=Sydney' },
    { name: 'Dubai', img: 'https://via.placeholder.com/300x200?text=Dubai' },
    { name: 'Rome', img: 'https://via.placeholder.com/300x200?text=Rome' },
    { name: 'Amsterdam', img: 'https://via.placeholder.com/300x200?text=Amsterdam' },
    { name: 'Berlin', img: 'https://via.placeholder.com/300x200?text=Berlin' },
    { name: 'Hong Kong', img: 'https://via.placeholder.com/300x200?text=Hong+Kong' },
    { name: 'Barcelona', img: 'https://via.placeholder.com/300x200?text=Barcelona' },
    { name: 'Rio de Janeiro', img: 'https://via.placeholder.com/300x200?text=Rio+de+Janeiro' }
];

const Carousel = () => {
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

      //Renderizacion del Componente

    return (
        <div className="container mx-auto py-10 h-1/2 relative top-16 z-0">
            <h2 className="text-4xl font-bold text-center mb-8">Popular Mytineraries</h2>

            {/* Contenedor del carrusel */}
            <div className="overflow-hidden relative">
                <div
                    className="flex transition-transform duration-700"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {cityChunks.map((chunk, chunkIndex) => (

                        <div key={chunkIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {chunk.map((city, index) => (
                                <div key={index} className="relative">
                                <img src={city.img} alt={city.name} className="w-full h-auto object-cover rounded-lg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                                    {city.name}
                                </div>
                                </div>
                            ))}
                        </div>
                    ))}

                </div>
            </div>

            {/* Botones de navegación */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
            >
                Prev
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
            >
                Next
            </button>
        </div>
    );
};

export default Carousel;
