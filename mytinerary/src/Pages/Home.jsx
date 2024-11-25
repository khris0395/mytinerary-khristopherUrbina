import CallToAction from "../components/CallToAction"
import AdventureCard from "../components/AdventureCard"
import Carousel from "../components/Carousel"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/actions/actionAuth";
import { useEffect } from "react";
import axios from "axios";


const loginWithToken = async (token) => {
  try {

    const response = await axios.get(
      "http://localhost:8080/api/users/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.response;
  } catch (error) {
    console.log("error", error);
  }
};

function Home(){

    const navigate = useNavigate();

    const dispatch = useDispatch();
  
    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      if (token) {

        localStorage.setItem("token", token);
  
        loginWithToken(token).then((user) => {
          dispatch(setUser({ user, token }));
        });
        
      }
      navigate("/")
    }, [dispatch,navigate]);

    return (

        <>
        <div className="bg-gray-900">
            <CallToAction></CallToAction> 
            <div className="flex md:justify-between md:flex-row flex-col px-10">
                <AdventureCard></AdventureCard>
                <Carousel></Carousel>
            </div>
        </div>
        </>
    )


}

export default Home