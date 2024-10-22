import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities"
import Details from "./Pages/Details";
import StandarLayout from "./Layouts/StandarLayout";

const router = createBrowserRouter([
  {
    element: <StandarLayout> </StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/cities", element: <Cities></Cities>},
      { path: "/details", element: <Details></Details>}
    ],
  }]);


function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;