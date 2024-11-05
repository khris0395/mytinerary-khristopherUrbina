import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from "../store/actions/actionFetchCities";

function SearchCities(){

  const dispatch = useDispatch();
  const { cities, loading, error } = useSelector((state) => state.cities);
  const navigate = useNavigate(); // estado de la informacion enviada al details

  // funcion que controla el envio de informacion al details
  
  function handleClickDetails(object) {
  
    navigate("/details" , {state: object})

  }

  useEffect(() => {
    dispatch(fetchCities(""));
  }, [dispatch]);


  return (<>

    <div className="relative h-96 pb-20 bg-cover bg-center">
      <div className="relative h-64 md:h-96"> 
        <img
          className="absolute inset-0 w-full h-full object-cover bg-black opacity-60"
          src="https://wallpapers.com/images/hd/1920x1080-full-hd-nature-landscape-54q8pleyp8lhhbu7.jpg"
          alt="Your dreams await you"
        />
      </div>
      <div className="absolute inset-10 flex flex-col items-center justify-center text-center h-96 px-4">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg tracking-widest uppercase transform hover:scale-105 transition duration-500 ease-in-out">
          Explore The World
        </h1>
        <p className="text-2xl text-gray-100 mt-4 mb-8 max-w-xl drop-shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
          Unleash your travel desires and discover the most amazing destinations around the globe.
        </p>

      </div>
    </div>


    <div className="container mx-auto px-4 py-8">

      <input
        type="text"
        //value={name}
        onChange={(e)=>dispatch(fetchCities(e.target.value))}
        placeholder="Search for a city..."
        className=" bg-gray-500 border p-2 rounded-md w-full"
      />

      {/* renderizacion de los resultados */}

      <h2 className="text-3xl font-bold my-8 text-center">Popular Destinations</h2>

      {loading && <p>Loading...</p>} {/* Mostrar mensaje de carga */}
      {error && <p>Error: {error}</p>} {/* Mostrar mensaje de error */}

        {cities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cities.map((card) => (
                <div key={card._id} className="bg-zinc-400 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img className="w-full h-48 object-cover" src={card.photo} alt={card.name} />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{card.name}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <button onClick={()=>handleClickDetails(card)}  className="bg-zinc-700 text-white px-4 py-2 rounded hover:bg-zinc-900 transition duration-300">
                    Explore
                  </button>
                </div>
              </div>
              ))}
          </div>
        ) : (
            <p className="h-screen w-auto flex items-center justify-center text-center bg-zinc-500 text-gray-800 font-semibold text-3xl rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105">
            Oops! No results found. 😢
            <br />
            Try adjusting your search or exploring other cities.
          </p>
        )}

      </div>
    </>
  );


};

export default SearchCities;
