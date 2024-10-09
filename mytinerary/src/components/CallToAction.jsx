import { NavLink } from "react-router-dom";

const routes = { to: "/cities", text: "Cities" }


function CallToAction(){

    return(
        <>

        <div className="relative w-full h-full">
            <img className=" h-screen md:h-full object-cover" 
            src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Your dreams await you" />
            <div className=" absolute inset-0 flex flex-col items-center justify-center ">
                <h1 className="text-gray-300 text-3xl md:text-5xl pb-6 font-black">MyTinerary</h1>
                <p className="text-gray-950 text-2xl md:text-3xl  w-1/2 text-center italic font-semibold">Find your perfect trip, designed by insiders who know and love their cities!</p>
                <NavLink to={routes.to} className="text-gray-300 text-2xl italic md:text-3xl p-4 my-3 rounded-md transition ease-in-out delay-150 bg-gray-500 hover:scale-110 hover:opacity-80 hover:bg-zinc-800 duration-300 ">Find out more..</NavLink>
            </div>
        
        </div>
        
        
        </>
    )


}

export default CallToAction