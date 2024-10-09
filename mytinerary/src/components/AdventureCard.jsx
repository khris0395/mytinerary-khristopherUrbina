function AdventureCard(){

    return(

    <>
    <div className="flex justify-center items-center w-full md:w-1/3 h-auto mt-10 md:mt-0">

        <div className="w-11/12 md:w-96 h-96 flex flex-col justify-center items-center bg-zinc-400 rounded-xl">

            <div className=" w-11/12 md:w-60 pb-9 px-10 md:px-10 lg:px-0 text-gray-900 text-2xl md:text-3xl italic font-semibold">
                <h2>Where is your next destination? Find a city and let the adventure begin...</h2>
            </div>

            <div class="flex items-center bg-gray-400 border border-gray-500 rounded-md overflow-hidden shadow-md w-1/2">
                <input 
                    type="text" 
                    placeholder="Buscar..."
                    class="px-4 py-2 w-full outline-none text-gray-800"
                />
                <button class="px-2 py-2 bg-gray-600 text-white hover:bg-gray-700 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass w-6 h-6" viewBox="0 0 16 16">
                        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                    </svg>
                </button>

            </div>
        </div>

        </div>
        
    </>
    )
}

export default AdventureCard