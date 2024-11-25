import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities"
import Details from "./Pages/Details";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import PrivateLogin from "./components/PrivateLogin";
import StandarLayout from "./Layouts/StandarLayout";
import { useDispatch } from "react-redux";
import { setUser } from "./store/actions/actionAuth";
import axios from "axios";

const router = createBrowserRouter([
  {
    element: <StandarLayout> </StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/cities", element: <Cities></Cities>},
      { path: "/details", element: <Details></Details>},
      { path: "/SingIn", element: <PrivateLogin><Login></Login></PrivateLogin>},
      { path: "/SingUp", element: <PrivateLogin><SingUp></SingUp></PrivateLogin>},
    ],
  }]);

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

function App() {

  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }));
    });
  }

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;