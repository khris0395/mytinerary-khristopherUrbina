import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItineraries } from '../store/actions/actionFetchItineraries';

function Itineraries() {
  const dispatch = useDispatch();
  const { itineraries, loading, error } = useSelector((state) => state.itineraries);

  const location = useLocation();
  const object = location.state;
  console.log(object._id);

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleDetails = (id) => {
    // Colapsar la card si está expandida, o expandir la card seleccionada
    setExpandedCard((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    dispatch(fetchItineraries(object._id));
  }, [dispatch]);

  return (
    <>
      <div className="relative py-20 bg-cover bg-center">
        {/* Renderización de los resultados */}
        {loading && <p>Loading...</p>} {/* Mostrar mensaje de carga */}
        {error && <p>Error: {error}</p>} {/* Mostrar mensaje de error */}
        
        {itineraries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {itineraries.map((itinerary) => (
              <div className='relative' key={itinerary._id}>
                <div className="bg-zinc-600 rounded-lg shadow-lg flex justify-center">
                  <img
                    className="w-32 h-32 object-cover bg-white rounded-full border-4 border-black -translate-y-1/2"
                    src={itinerary.userPhoto}
                    alt={itinerary.userName}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{itinerary.userName}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500">{itinerary.price}</span>
                    </div>
                    <p className="text-black">Duration: {itinerary.duration} hours</p>
                    <p className="text-black">Likes: {itinerary.likes}</p>
                    <div className="flex space-x-2 my-2">
                      {itinerary.hashtags.map((tag, index) => (
                        <span key={index} className="text-zinc-800">{tag}</span>
                      ))}
                    </div>
                    <button
                      onClick={() => toggleDetails(itinerary._id)}
                      className="mt-2 bg-zinc-500 text-white px-4 py-2 rounded hover:bg-zinc-700 transition duration-300"
                    >
                      View More
                    </button>
                  </div>
                </div>
                {expandedCard === itinerary._id && (
                  <div className="bg-gray-800 p-4 w-full absolute">
                    <p className="text-center text-gray-600">Under construction</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="h-1/2 w-auto flex items-center justify-center text-center bg-zinc-500 text-gray-800 font-semibold text-3xl rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105">
            There are no itineraries available for this city but you can check other cities!
          </p>
        )}
      </div>
    </>
  );
}

export default Itineraries;
